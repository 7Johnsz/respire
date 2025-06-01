from langchain_core.runnables.history import RunnableWithMessageHistory
from langchain_core.runnables import RunnableLambda

# Utils
from app.utils.session_history import get_session_history
from app.utils.rate_limit import check_rate_limit

# Services
from services.llm.config import llm

import streamlit as st
import time

def main():
    st.set_page_config(page_title="Respire AI", page_icon="🌱")
    st.chat_message("ai").write(
        "Olá! Sou a **Respire AI** 🌱 — sua parceira na jornada por uma vida mais leve e livre do vape. "
        "Fui criada com um propósito que vai além dos algoritmos: oferecer apoio, consciência e um novo fôlego a quem busca mudança. "
        "Juntos, vamos transformar o que antes fazia mal em algo que inspira o bem. ✨"
    )

    with st.sidebar:    
        st.title("🌱 Respire AI")
        st.markdown("Converse com uma IA que te motiva a parar de usar vape.")
        st.badge("Respire sem culpa")
        st.write("Desenvolvido por [Respire](https://respire-alpha.vercel.app/)")

    if "chat_histories" not in st.session_state:
        st.session_state.chat_histories = {}
        
    if "processing" not in st.session_state:
        st.session_state.processing = False
        
    if "message_timestamps" not in st.session_state:
        st.session_state.message_timestamps = []

    if "rate_limited" not in st.session_state:
        st.session_state.rate_limited = False

    if "rate_limited_until" not in st.session_state:
        st.session_state.rate_limited_until = 0

    APP_SESSION_ID = "streamlit_user_session"

    current_history = get_session_history(APP_SESSION_ID)
    for msg in current_history.messages:
        if msg.type == "human":
            st.chat_message("human").write(msg.content)
        elif msg.type == "ai":
            st.chat_message("ai").write(msg.content)
            
    runnable = RunnableLambda(llm.generate_response) 
            
    conversational_runnable = RunnableWithMessageHistory(
        runnable,  # type: ignore
        get_session_history, 
        input_messages_key="input",    
        history_messages_key="history"
    )

    disabled = (
        st.session_state.get("processing", False)
        or st.session_state.get("rate_limited", False)
    )

    if st.session_state.rate_limited and time.time() >= st.session_state.rate_limited_until:
        st.session_state.rate_limited = False
        st.session_state.message_timestamps = []

    pergunta = st.chat_input(
        "Como você está se sentindo hoje?",
        key="chat_input",
        disabled=disabled,
    )

    if pergunta:
        check_rate_limit()

        if not st.session_state.rate_limited:
            st.session_state.processing = True
            st.chat_message("human").write(pergunta)

            with st.spinner("Respirando com você..."):
                try:
                    response = conversational_runnable.invoke(
                        {"input": pergunta},
                        config={"configurable": {"session_id": APP_SESSION_ID}}
                    )
                    st.chat_message("ai").write(response)

                except Exception as e:
                    st.error(f"Ocorreu um erro ao processar sua mensagem: {e}")

                finally:
                    st.session_state.processing = False
                    st.rerun()


if __name__ == "__main__":
    main()
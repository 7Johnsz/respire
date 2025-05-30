from langchain_community.chat_message_histories import ChatMessageHistory
from langchain.schema import BaseChatMessageHistory 
import streamlit as st

def get_session_history(session_id: str) -> BaseChatMessageHistory:
    """
    Retrieves or creates a chat history object for a given session ID
    from Streamlit's session state.
    """
    if session_id not in st.session_state.chat_histories:
        st.session_state.chat_histories[session_id] = ChatMessageHistory()
    return st.session_state.chat_histories[session_id]

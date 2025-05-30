import streamlit as st
import time

def check_rate_limit():
    """
    Checks the rate limit of user input and displays a toast warning if the rate limit is exceeded.
    
    The rate limit is 5 messages per second. If the user sends more than 5 messages in a second,
    a toast warning is displayed saying "⚠️ Você está indo rápido demais. Aguarde um momento.".
    The user is then rate limited and cannot send any more messages for 15 seconds.
    """
    now = time.time()
    st.session_state.message_timestamps = [
        t for t in st.session_state.message_timestamps if now - t < 1
    ]
    st.session_state.message_timestamps.append(now)

    if len(st.session_state.message_timestamps) >= 2:
        st.session_state.rate_limited = True
        st.session_state.rate_limited_until = now + 15
        st.toast("⚠️ Você está indo rápido demais. Aguarde um momento.", icon="🐇")

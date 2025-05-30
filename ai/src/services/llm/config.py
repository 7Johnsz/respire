from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
from app.chains import prompt

import streamlit as st
import os

load_dotenv()

class LLMService:
    def __init__(self): 
        """
        Initialize the LLM Service.

        This function attempts to create a ChatGoogleGenerativeAI instance
        with the given model and temperature. If the API key is not set,
        or the model name is invalid, an error message is displayed and
        the app is stopped.

        If the session state does not contain a "chat_histories" key,
        an empty dictionary is created and added to the session state.
        """
        try:
            self.llm = ChatGoogleGenerativeAI(
                model="gemini-2.0-flash",
                temperature=0.7,
                google_api_key=os.getenv("GOOGLE_API_KEY"))

        except Exception as e:
            st.error(f"Failed to initialize LLM. Please check your API key and model name. Error: {e}")
            st.stop()   
            
    def generate_response(self, input):
        chain = prompt | self.llm

        return chain.invoke({"input": input["input"], "history": input["history"]}).content
            
llm = LLMService()
    
    
from flask import Flask 

app = Flask(__name__,static_folder='../Frontend/dist',template_folder='../Frontend/src')

from app import routes 

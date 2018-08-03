from app import app
from flask import Flask, render_template

@app.route('/')
@app.route('/index')
def index():
	return 'Hello World!'

@app.route('/Jorge')
def hello():
	return render_template('index.html')
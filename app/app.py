from flask import Flask
from flask import render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('homepage.html')

if __name__ == "__main__":
    if os.environ.get('DEBUG'):
        app.debug = True
        app.run('127.0.0.1',5001)
    else:
        app.run()

from flask import Flask
from flask import render_template
import os

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('hello.html')

@app.route("/test")
def test():
    return "new page sadsd"

if __name__ == "__main__":
    if os.environ.get('DEBUG'):
        app.debug = True

    app.run()

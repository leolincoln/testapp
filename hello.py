import os
from flask import Flask

app=Flask(__name__)

@app.route('/')
app.config.update(
    DEBUG=True,
    )
def hello():
    return 'hello world2!'


if __name == '__main__':
    port = int(os.environ.get("PORT",5000))
    app.run(host='0.0.0.0',port = port)

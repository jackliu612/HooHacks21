from flask import Flask, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
socketio = SocketIO(app)

players = []

@app.route('/')
def main():
    return render_template('index.html')

@socketio.on('userJoined')
def add_user(data):
    print(data)
    players.append(data)
    socketio.emit('addUser', data)


if __name__ == '__main__':
    socketio.run(app, host='0.0.0.0', port=5000, debug=True)
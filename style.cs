body {
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f7f7f7;
    font-family: Arial, sans-serif;
}

.game-container {
    position: relative;
    width: 600px;
    height: 200px;
    border: 2px solid #333;
    background-color: #fff;
    overflow: hidden;
}

.teenager {
    position: absolute;
    bottom: 0;
    left: 50px;
    width: 40px;
    height: 60px;
    background-color: #00f;
}

.huhn {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
    background-color: #f00;
    animation: moveHuhn 2s linear infinite;
}

@keyframes moveHuhn {
    0% {
        right: 0;
    }
    100% {
        right: 600px;
    }
}

.score {
    margin-top: 20px;
    font-size: 24px;
}

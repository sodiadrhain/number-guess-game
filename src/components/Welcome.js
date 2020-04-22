import React, {Component} from "react";

const num = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
]

let showNum = num[Math.floor(Math.random() * num.length)]


class Welcome extends Component {

    constructor(props){
        super(props);
        this.state = {
            welcomeTimer: "",
            start: "",
            mode: "none",
            game: "none",
            gameMode: "",
            guess: "",
            guessLeft: 0,
            gameOver: "none",
            score: 0,
            correct: "none",
            touch: "",
            wrong: "none",
            realNum: showNum,
            disTouch: "none",
            gameLoading: "none"
        }
    }

handle = () => {

        setTimeout(function () {
            document.getElementById("welcome").style.display = "none";
            document.getElementById("start").style.display = "";
        }, 5000);
        
    
}

handleStart = () => {
    this.setState({
        mode: "",
        start: "none"
    })
}

handleEasy = () => {
    this.setState({
        game: "",
        mode: "none",
        gameMode: "easy",
        guessLeft: 8,
        gameLoading: ""
    })

}

handleMedium = () => {
    this.setState({
        game: "",
        mode: "none",
        gameMode: "medium",
        guessLeft: 4
    })
}

handleHard = () => {
    this.setState({
        game: "",
        mode: "none",
        gameMode: "hard",
        guessLeft: 2
    })
}

handleGuess = (sys, key) => {
    this.setState({
        guess: sys,
        guessLeft: this.state.guessLeft - 1,
        disTouch: "",
        touch: this.state.touch + " " + sys 
        
    })

    if(this.state.guessLeft === 1 ) {
        this.setState({
            gameOver: "",
            game: "none",
            wrong: "none"
        })
    }

    if(sys === this.state.realNum){
        this.setState({
            score: this.state.score+1,
            correct: "",
            game: "none",
            wrong: "none"

        })
    } 
    else if(this.state.guessLeft === 1){
        this.setState({
            wrong: "none"
        })
    } 
    else {
        this.setState({
            wrong: "",
            game: "none",
            correct: "none",
            score: this.state.score
        })
    }

}


handleReplay = () => {
    showNum = num[Math.floor(Math.random() * num.length)]
    this.setState({
        mode: "",
        guessLeft: 0,
        gameOver: "none",
        guess: "",
        correct: "none",
        wrong: "none",
        realNum: showNum,
        disTouch: "none",
        touch: ""
    })
}

handlePlayAgain = () => {
    this.setState({
        game: "",
        correct: "none",
        wrong: "none"

    })
}

    render(){

            return (

                <div className="welcome">
                   
                    <h1 style={{ display: this.state.start}}>Random Number Guessing</h1>
                    <div className="flex" id="welcome" style={{ display: this.state.welcomeTimer }} onLoad={this.handle()}>
                        <div>
                            <h3>
                                Loading
                        </h3>
                        </div>
                        <div className="loader"></div>
                        <div className="loader"></div>
                        <div className="loader"></div>
                    </div>

                    <div id="start" style={{ display: "none" }} onLoad={this.handle()}>
                        <button onClick={(e) => this.handleStart()} style={{ display: this.state.start }}>
                            START GAME
                        </button>
                    </div>
                   
                    <div style={{ display: this.state.mode }}>
                        <h1>Mode</h1>
                        <button onClick={(e) => this.handleEasy()}>
                            EASY
                    </button>
                        <button onClick={(e) => this.handleMedium()}>
                            MEDIUM
                    </button>
                        <button onClick={(e) => this.handleHard()}>
                            HARD
                    </button>
                    </div>
                    <div style={{ display: this.state.gameOver }}>
                        <p>
                            <b>
                                High Score: {this.state.score}
                            </b>
                        </p>
                        <p>Game Over, You used up all your guesses</p>
                        <button onClick={(e) => this.handleReplay()}>PLAY AGAIN</button>
                    </div>
                    <div style={{ display: this.state.correct }}>
                        <p>
                            <b>
                                High Score: {this.state.score}
                            </b>
                        </p>
            <p>You guessed right!!!, Number is {showNum}</p>
                        <button onClick={(e) => this.handleReplay()}>PLAY AGAIN</button>
                    </div>
                    <div style={{ display: this.state.wrong }}>
                        <p>OOPS!!!, You guessed wrong</p>
                        <button onClick={(e) => this.handlePlayAgain()}>KEEP TRYING</button>
                    </div>
                    <div style={{ display: this.state.game}}>
                        {
                            (this.state.gameMode === "easy") ?
                            <div>
                            <h1>Easy Mode</h1>
                            {num.map((sys, key) => {
                             if(sys === this.state.guess){
                                    return (
                                        <button style={{ margin: "2px" }} key={key} onClick={(e) => this.handleGuess(sys, key)} className="touch" disabled>
                                            {sys}
                                        </button>
                                    )
                                } else {
                                    
                                    return (
                                        <button style={{ margin: "2px" }} key={key} onClick={(e) => this.handleGuess(sys, key)} className="">
                                            {sys}
                                        </button>
                                    )
                                }

                            })}
                            <div className="board">
                                High Score: {this.state.score}
                                <br/>
                                Guesses Left: {this.state.guessLeft}
                            </div>
                                    {
                                        (this.state.guess !== "") ?
                                            <div style={{ display: this.state.disTouch }}>
                                                <p>

                                                    Your Guesses: {this.state.touch}
                                                </p>
                                            </div>
                                            :
                                            <div>
                                                <br />
                                            </div>
                                    } 
                            RULE:::
                            <br/>
                            You have eight guesses to make
                            <br/>
                            You keep guessesing till you are right
                            <br />
                            There is a random number I have choosen above; See if you get it by clicking
                            <br />
                            If you guess right, you win else I win.
                            </div>
                             : 
                            (this.state.gameMode === "medium") ?
                             <div>
                                <h1>Medium Mode</h1>
                                    {num.map((sys, key) => {
                                    if (sys === this.state.guess) {
                                        return (
                                                    <button style={{ margin: "2px" }} key={key} onClick={(e) => this.handleGuess(sys, key)} className="touch" disabled>
                                                        {sys}
                                                    </button>
                                                )
                                            } else {

                                                return (
                                                    <button style={{ margin: "2px" }} key={key} onClick={(e) => this.handleGuess(sys, key)} className="">
                                                        {sys}
                                                    </button>
                                                )
                                            }

                                        })}
                                        <div className="board">
                                            High Score: {this.state.score}
                                            <br />
                                Guesses Left: {this.state.guessLeft}
                                        </div>
                                        {
                                            (this.state.guess !== "") ?
                                                <div style={{ display: this.state.disTouch }}>
                                                    <p>

                                                        Your Guesses: {this.state.touch}
                                                    </p>
                                                </div>
                                                :
                                                <div>
                                                    <br />
                                                </div>
                                        } 
                            RULE:::
                            <br />
                            You have four guesses to make
                            <br />
                            You keep guessesing till you are right
                            <br />
                            There is a random number I have choosen above; See if you get it by clicking
                            <br />
                            If you guess right, you win else I win.
                            </div> :
                            (this.state.gameMode === "hard") ?
                                        <div>
                                            <h1>Hard Mode</h1>
                                            {num.map((sys, key) => {
                                                if (sys === this.state.guess) {
                                                    return (
                                                        <button style={{ margin: "2px" }} key={key} onClick={(e) => this.handleGuess(sys, key)} className="touch" disabled>
                                                            {sys}
                                                        </button>
                                                    )
                                                } else {

                                                    return (
                                                        <button style={{ margin: "2px" }} key={key} onClick={(e) => this.handleGuess(sys, key)} className="">
                                                            {sys}
                                                        </button>
                                                    )
                                                }

                                            })}
                                            <div className="board">
                                                High Score: {this.state.score}
                                                <br />
                                Guesses Left: {this.state.guessLeft}
                                            </div>
                                            {
                                                (this.state.guess !== "") ?
                                            <div style={{ display: this.state.disTouch }}>
                                            <p>
                                    
                                               Your Guesses: {this.state.touch}
                                                    </p>
                                            </div> 
                                                    :
                                                    <div>
                                                        <br/>
                                                    </div>
                                            } 
                                        
                            RULE:::
                            <br />
                            You have two guesses to make
                            <br />
                            You keep guessesing till you are right
                            <br />
                            There is a random number I have choosen above; See if you get it by clicking
                            <br />
                            If you guess right, you win else I win.
                            </div> :
                            null
                            
                        }
    
                    </div>

                </div>
            )    
   
        
        
    }
}

export default Welcome;
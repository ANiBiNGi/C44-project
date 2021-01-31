class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting = createElement("h2")
    }

    hide(){
        this.input.hide()
        this.button.hide()
        this.greeting.hide()
      }

    Display(){
        var title = createElement("h2")
        title.html("ShootingRange")
        title.position(displayWidth/2 - 50,10);
        this.input.position(130,160);
        this.button.position(displayWidth/2 - 20,displayHeight-200)

        this.button.mousePressed(() => {
            this.input.hide()
            this.button.hide()

            player.name = this.input.value()
            player.index = playerCount;
            this.greeting.html("Hello " + player.name + ", Welcome to the ShootingRange")
            this.greeting.position(130,160)
            playerCount = playerCount + 1
            player.updateCount(playerCount)
            player.update()
        })
    }
}
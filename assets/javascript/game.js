$(document).ready(function () {
    var game = {
        value: 0,
        lose: 0,
        win: 0,
        sum: 0,
        firstImage: 0,
        secondImage: 0,
        thredImage: 0,
        forthImage: 0,

        loadData: function () {
            
            this.sum = 0;
            this.value = Math.floor(Math.random() * (120 - 19) + 19);
            for (var i = 1; i <= 4; i++) {
                var randomNum = Math.floor(Math.random() * (12 - 1) + 1);
                //   console.log(randomNum);
                switch (i) {
                    case 1:
                        this.firstImage = randomNum;
                        break;
                    case 2:
                        this.secondImage = randomNum;
                        break;
                    case 3:
                        this.thredImage = randomNum;
                        break;
                    case 4:
                        this.forthImage = randomNum;
                        break;
                }
            }
            $("#value").text(this.value);
            $("#sum").text(this.sum);
            $("#lose").text(this.lose);
            $("#win").text(this.win);
        },
        claculatValue: function (imageValue) {
            debugger;
            this.sum = this.sum + imageValue;
            $("#sum").text(this.sum);
            if (this.sum === this.value) {
                this.win = this.win + 1;
                $("#win").text(this.win);
                this.loadData();
            }
            else if (this.sum > this.value) {
                this.lose = this.lose + 1;
                $("#lose").text(this.lose);
                this.loadData();
            }

        }

    }

    game.loadData();
   


    $("#first-image").on('click', function () {
        debugger;
        game.claculatValue(game.firstImage);

    })


    $("#second-image").on('click', function () {
        game.claculatValue(game.secondImage);
    })
    $("#thred-image").on('click', function () {
        game.claculatValue(game.thredImage);
    })
    $("#forth-image").on('click', function () {
        game.claculatValue(game.forthImage);
    });

});

   



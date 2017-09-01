({
    buildBingoHlp : function(cmp) {
        let lst_bingoRows = [
            ["No It's still loading", "Loud, Painful Echo / Feedback", "I have a hard stop at...", "Can everyone see my screen?", "I'm sorry, I was on mute"], 
            ["Hey can you hear me?", "I'm sorry, you cut out here", "So (faded out) I can (unintelligible) by (fades out) ok?", "I'll have to get back to you", "Can everyone go on mute?"], 
            ["Hi, who joined?", "Uhhh, are you still there?", "(Child or animal noises)?", "Hi guys, I have to jump to another call", "Hello, HELLO, HELLO ??!!"],
            ["Can we take this offline?", "Are you still sharing?", "Sorry, didn't catch that, can you repeat?", "Sorry I am late", "Next slide please"],
            ["(Someone is eating or brushing her teeth)", "Sorry, come again!", "I think there is a bug", "Sorry, I am having a connection issues", "Can you go on Michelin Skype?"]];

        // Init all cells to "Unselected"
        this.initBingoBoard(lst_bingoRows);
    },

    selectCellHlp : function(cmp, event) {
        let cell = event.currentTarget;
        let rowIndex = cell.getAttribute("data-rowIndex");
        let colIndex = cell.getAttribute("data-colIndex");
        let lst_bingoRows = cmp.get("v.bingoRows");

        if (!lst_bingoRows[rowIndex][colIndex].isSelected) {
            lst_bingoRows[rowIndex][colIndex].isSelected = true;
            $A.util.addClass(cell, 'selectedBg');
        }
        else {
            lst_bingoRows[rowIndex][colIndex].isSelected = false;
            $A.util.removeClass(cell, 'selectedBg');
        }

        cmp.set("v.bingoRows", lst_bingoRows);
        // Verify if Bingo is reached, aka a whole row, column or diagonal is selected
        this.checkBingo(cmp);
    },

    initBingoBoard: function(p_bingoRows) {
        let lst_bingoWrappers = [];
        let bingoSize = p_bingoRows.length;

        for (let i = 0; i < bingoSize; i++) {
            let lst_bingoRowWrappers = [];
            for (let j = 0; j < bingoSize; j++) {
                let rowWrapper = {
                    cellValue : p_bingoRows[i][j],
                    isSelected : false
                };
                lst_bingoRowWrappers.push(rowWrapper);
            }
            lst_bingoWrappers.push(lst_bingoRowWrappers);
        }
        cmp.set("v.bingoRows", lst_bingoWrappers);
    },

    // The methods checks if we reached a Bingo. A Bingo is reached when a whole
    // row, column or diagonal is selected
    checkBingo: function(cmp) {
        let lst_bingoRows = cmp.get("v.bingoRows");
        // Size of the array - Bingo board is always a square
        let bingoSize = lst_bingoRows.length;
        let bingoDiagonalExists = true;
        let bingoInverseDiagonalExists = true;

        for (let i = 0; i < bingoSize; i++) {
            let bingoRowExists = true;
            let bingoColExists = true;
            for (let j = 0; j < bingoSize; j++) {
                if (!lst_bingoRows[i][j].isSelected) {
                    bingoRowExists = false;
                }
                if (!lst_bingoRows[j][i].isSelected) {
                    bingoColExists = false;
                }
            }

            if (!lst_bingoRows[i][i].isSelected) {
                bingoDiagonalExists = false;
            }
            if (!lst_bingoRows[i][bingoSize -i -1].isSelected) {
                bingoInverseDiagonalExists = false;
            }

            if (bingoRowExists || bingoColExists) {
                console.log("bigno row or col !");
                // Init the bingo board
                this.initBingoBoard(lst_bingoRows);
                return;
            }
        }
        if (bingoDiagonalExists || bingoInverseDiagonalExists) {
            console.log("bigno diag !");
            this.initBingoBoard(lst_bingoRows);
            return;
        }

    }

})
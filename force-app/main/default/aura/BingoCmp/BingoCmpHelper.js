({
    buildBingoHlp : function(cmp) {
        let bingoList = [
            ["No It's still loading", "Loud, Painful Echo / Feedback", "I have a hard stop at...", "Can everyone see my screen?", "I'm sorry, I was on mute"], 
            ["Hey can you hear me?", "I'm sorry, you cut out here", "So (faded out) I can (unintelligible) by (fades out) ok?", "I'll have to get back to you", "Can everyone go on mute?"], 
            ["Hi, who joined?", "Uhhh, are you still there?", "(Child or animal noises)?", "Hi guys, I have to jump to another call", "Hello, HELLO, HELLO ??!!"],
            ["Can we take this offline?", "Are you still sharing?", "Sorry, didn't catch that, can you repeat?", "Sorry I am late", "Next slide please"],
            ["(Someone is eating or brushing her teeth)", "Sorry, come again!", "I think there is a bug", "Sorry, I am having a connection issues", "Can you go on Michelin Skype?"]];

        // Init all cells to "Unselected"
        for (let i = 0; i < bingoList.length; i++) {
            bingoList[i] = this.unselectAllCells(bingoList[i]);
        }
        cmp.set("v.bingoList", bingoList);
    },

    selectCellHlp : function(cmp, event) {
        let cell = event.currentTarget;
        let colIndex = cell.getAttribute("data-colIndex");
        let rowIndex = cell.getAttribute("data-rowIndex");
        let bingoList = cmp.get("v.bingoList");

        if (!bingoList[rowIndex][colIndex].isSelected) {
            bingoList[rowIndex][colIndex].isSelected = true;
            $A.util.addClass(cell, 'selectedBg');
        }
        else {
            bingoList[rowIndex][colIndex].isSelected = false;
            $A.util.removeClass(cell, 'selectedBg');
        }

        cmp.set("v.bingoList", bingoList);
        this.checkBingo(cmp);
    },

    unselectAllCells: function(p_bingoList) {
        let bingoWrappers = [];
        for (let i = 0; i < p_bingoList.length; i++) {
            let wrapper = {
                value : p_bingoList[i],
                isSelected : false
            };
            bingoWrappers.push(wrapper);
        }
        return bingoWrappers;
    },

    checkBingo: function(cmp) {
        let bingoList = cmp.get("v.bingoList");

        for (let i = 0; i < bingoList.length; i++) {
            let bingoExists = true;
            let row = bingoList[i];
            for (let j = 0; j < row.length; j++) {
                if (!row[j].isSelected) {
                    bingoExists = false;
                    break;
                }
            }
            if (bingoExists) {
                console.log("bigno !");
                // Init the bingo board
                this.buildBingoHlp(cmp); 
                break;
            }
        }
    }

})
({
    buildBingoHlp : function(cmp) {
    	let bingoSubList1 = ['No It\'s still loading', 'Loud, Painful Echo / Feedback', 'I have a hard stop at...', 'Can everyone see my screen?', 'I\'m sorry, I was on mute'];
        let bingoSubList2 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        let bingoSubList3 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        let bingoSubList4 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        let bingoSubList5 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        
        let bingoList = [bingoSubList1, bingoSubList2, bingoSubList3, bingoSubList4, bingoSubList5];

        for (let i = 0; i < bingoList.length; i++) {
            bingoList[i] = this.addWrapper(bingoList[i]);
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
    },

    addWrapper: function(p_bingoList) {
        let bingoWrappers = [];
        // Init all cells to "unSelected"
        for (let i = 0; i < p_bingoList.length; i++) {
            let wrapper = {
                value : p_bingoList[i],
                isSelected : false
            };
            bingoWrappers.push(wrapper);
        }
        return bingoWrappers;
    }

})
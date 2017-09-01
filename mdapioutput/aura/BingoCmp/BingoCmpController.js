({
    doInit : function(cmp, event, helper) {
        helper.buildBingoHlp(cmp);
    },
    
    selectCell : function(cmp, event, helper) {
        helper.selectCellHlp(cmp, event);
    },
    
    playAgain : function(cmp, event, helper) {
        cmp.set("v.gameIsOver", false);
    }
})
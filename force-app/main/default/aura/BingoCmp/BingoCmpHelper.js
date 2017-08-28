({
    buildBingo : function(cmp) {
    	let bingoSubList1 = ['No It\'s still loading', 'Loud, Painful Echo / Feedback', 'I have a hard stop at...', 'Can everyone see my screen?', 'I\'m sorry, I was on mute'];
        let bingoSubList2 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        
        let bingoSubList3 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        let bingoSubList4 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        let bingoSubList5 = ['Hey can you hear me?', 'I\'sorry, you cut out here', 'So (faded out) I can (unintelligible) by (fades out) ok?', 'I\'ll have to back to you', 'Can everyone go on mute?'];
        
        let bingoList = [bingoSubList1, bingoSubList2, bingoSubList3, bingoSubList4, bingoSubList5];
        cmp.set("v.bingoList", bingoList);
    }
})

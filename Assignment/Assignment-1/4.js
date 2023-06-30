// 4.WAP to rotate the string ‘brainmentors in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front.

// input  = brainmentors

// output = sbrainmentor


function rotate() {
    var name = "brainmentors";
    var Find = name;
    var j = Find.length;
    for(var i = 0; i < j; i++) {
        var Last = Find.charAt(j - 1);
        var First = Find.slice(0, j-1);
        var A = Last.concat(First);
        Find = A;
        console.log(Find);
    }
}


rotate();

Output-
VM2080:10 sbrainmentor
VM2080:10 rsbrainmento
VM2080:10 orsbrainment
VM2080:10 torsbrainmen
VM2080:10 ntorsbrainme
VM2080:10 entorsbrainm
VM2080:10 mentorsbrain
VM2080:10 nmentorsbrai
VM2080:10 inmentorsbra
VM2080:10 ainmentorsbr
VM2080:10 rainmentorsb
VM2080:10 brainmentors

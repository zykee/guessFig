/**
 * Created by coco on 17-7-18.
 */
'use strict';
let FIGURE = '1234' ;
function guessFig(fig) {
    let A = 0;
    let B = 0;
    /*let figArr = fig.filter(function (key,index,array) {
        for(let i = 0;i<FIGURE.length;i++)
        {
            if(key === FIGURE[i])
            {
                if(index === i)
                {
                    return 'A';
                }
                else
                {
                    return 'B';
                }
            }
        }
    });*/
    for(var i = 0;i<fig.length;i++)
    {
        if(FIGURE.indexOf(fig[i])>=0)
        {
            if(FIGURE.indexOf(fig[i])===i)
            {
                A++;
            }
            else
            {
                B++;
            }
        }
    }
    return `${A}A${B}B`
}
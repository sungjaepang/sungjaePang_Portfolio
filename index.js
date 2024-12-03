






/* short-answer를 클릭하면 
    1-1. 다른 short-answer 에게도 active 클래스를 붙여준다.
*/
$(document).ready(function(){
    function hand어쩌구저쩌구({tabSelector}, {q1Selector}, {q2Selector}, {q3Selector}, {q4Selector}) {
        const shortAnswerQ1 = $(`${tabSelector} ${q1Selector} .short-answer`)
    
    
        shortAnswerQ1.click(function(){
            const clickedButton = $(this);
            shortAnswerQ1.not(clickedButton).toggleClass('active');

            // const allActiveQ1 = $('.short-answer').filter('active');
            const allActiveQ1 = shortAnswerQ1.length === shortAnswerQ1.filter('active').length;
    
            // 
            /* 
                allActive는 shortAnswer의 style이 변경된 이후 확인 하는 방식임.
                그래서 모든 게 열린 후 확인 하고 싶다면 방법을 바꾸어야 함. (확인 중)
                    ex) shortAnswer 토글 한 이후 choice ox를 활용할 때. 
            */
            if (!allActiveQ1) {
                $(q2Selector).removeClass('ready');
                
                $(q1Selector).removeClass('allOpened');
                $(q2Selector).removeClass('openAble');

                // 
                console.log('not allActiveQ1');
            } else if (allActiveQ1) {
                $(q1Selector).addClass('allOpened');
                $(q2Selector).addClass('openAble');
                
                // 
                console.log('yes allActiveQ1');
            }

            // 모든 애들이 active 상태인지 체크
            allCheckActive();

        // shortAnswerQ1.click(function 끝
        })

        // function hand어쩌구저쩌구 끝
    }

    function allCheckActive(){
        /* const $(`${tabSelector} .short-answer`)

        function 전체체크(){
        
        }

        */
    }

// document.ready 끝
})


$(document).ready(function () {
    //제이쿼리 스타일 적용하기
    //$(대상).addClass('선택자')
    //먼저스타일을 선언한다 -> 대상.선택자
    //제이쿼리 스타일 삭제하기
    //$(대상).removeClass('선택자')
    function movie(n) {
        $('.view > li').eq(current).css({ opacity: 1 }).animate({ opacity: 0 }, 1000);
        $('.view > li').eq(n).css({ opacity: 0 }).animate({ opacity: 1 }, 1000);
        current = n;//버튼에 이벤트가 적용된 후에 인덱스값
        console.log(`curren: ${current}`);
    };
})
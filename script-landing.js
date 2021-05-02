$(document).ready(function() {
    var lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy-img",
        threshold: "400"
    });
    var userReviews = [
        ['건익', '제가 지금까지 라이언몰 6번 정도 구매해 봤는데 회수 절대 없었고 제품도 아주 좋고 가격도 저렴한 편이고 너무 좋은 샵 입니다! 많은 구매 하셔도 소비자 분들한테 좋으실 거구요! 게임계정은 무조건 라이언몰 보장 합니다 직원분들도 문의 빠르게 보시구 아주 친절하시고 사장님도 친절하셔서 추천합니다!'],
        ['재호', '라이언몰에서 일단 하나 사보세요! 타 샵이랑 질부터 다르고 너무 좋습니다. 중요한건 가격이죠! 타 샵에 비해서 싸고 직원분도 친절하셔서 달달합니다 라이언몰! 일일이 친절히 대답해주시고 앞으로도 자주 애용할 겁니다.'],
        ['제이', '제가 계정 사는 곳은 라이언몰 한 곳뿐인데 진짜 계정 상태에 최상급이라고 생각해요! 혹시 여기보다 좋은데 잇나 찾아봐도 돌고돌아 라이언몰 ㅋㅋ 진짜 여기가 최고에요! 앞으로도 자주 이용할 예정입니다. 진짜 지금 살까 말까 고민하시는 분들 바로 구매 가시죠. 여기 상담사 분이 진짜 친절하셔요 제가 생각해도 좀 귀찮을 것 같다 싶을 때가 있는데도 일일이 친절히 대답해주십니다.'],
        ['골드', '해외 이상 랜계 사봤는데 말할 것도 없습니다. 회수율도 거의 없고 랜계 품질도 짱짱입니다. 해외 이상 랜계 사실 곳이 없으신가요? 그러면 여기서 사세요. 그게 정답입니다. 믿고 사보세요. 저도 그랬으니'],
        ['슬미', '제가 라이언몰에서 배그와 오버워치 등등 상품을 많이 구매했습니다. 사장님은 매우 친절하게 답변해주셨고 상담사분도 너무 친절하여 문제없이 잘 구매했습니다. 랜계는 고스펙이 자주 등장하였고 배그 계정은 7개 이상 구매했지만 한개도 빠짐없이 닉네임 설정이 가능하고 문제가 없었습니다. 각종 계정을 구매하시려면 라이언몰에서 사는 걸 전 매우 강추합니다!'],
        ['정예석', '15만원 정도 구매했는데 부계로 쓰기에 너무 좋아요! 랜덤계정 살 때마다 무슨 티어 나올까 기대하면서 사는데 다른 곳에 비해서 품질이 너무 좋아요! 라이언몰 화이팅!'],
        ['APQ', '사장님이 정말 친절하셔요! 다른 샵에서 랜계를 샀다가 바로 회수당해서 돈을 버린 경험이 몇번 있었는데, 라이언몰에서는 몇번씩이나 회수보상을 해주시니깐 안심하고 사게돼요!'],
        ['로즈', '그냥 모든 계정은 라이언몰에서 구매하면 됩니다 ! 괜히 다른 곳 가서 손해볼 필요가 없습니다. 계정 품질 좋지, 사장님 친절하지, 상담사분 친절하지 굿굿입니다'],
    ];
    readyReviews = [];
    revNumber = $('.review-wrp').length;
    q = 0;

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    while (readyReviews.length < revNumber) {
        var rr = randomNumber(0, userReviews.length);
        k = 0;
        bad = 0;
        if (readyReviews.length == 0) {
            readyReviews[0] = rr;
        } else {
            for (k == 0; k < readyReviews.length; k++) {
                if (readyReviews[k] == rr) bad++;
            }
            if (bad == 0) {
                readyReviews[readyReviews.length] = rr;
            }
        }
    }
    $('.review-wrp').each(function() {
        $(this).find('.author-name').text(userReviews[readyReviews[q]][0] + ':');
        $(this).find('.review-text .rev-text').text('"' + userReviews[readyReviews[q]][1] + '"');
        q++;
    })
    $('.media-nav li').on('click', function() {
        var gameMedia = '.' + $(this).attr('data-gamemedia');
        $('.media-nav li').removeClass('active-media-link');
        $(this).addClass('active-media-link');
        $('.media-inner').hide();
        $(gameMedia).show();
    })
    $('.media-inner img').on('click', function() {
        var mediaUrl = $(this).attr('data-fullimg');
        if ($(this).closest('.img-inner').hasClass('vid-thumb') != true && $(this).closest('.big-vid-id').hasClass('big-vid_wrp') != true) {
            $('#img-popup img').attr('src', mediaUrl);
            $('#img-popup').addClass('popup-show');
            $('body').addClass('no-overflow');
        } else {
            $('#video-popup iframe').attr('src', 'https://www.youtube.com/embed/' + mediaUrl);
            $('#video-popup').addClass('popup-show');
            $('body').addClass('no-overflow');
        }
    })
    $('body').on('click', function(e) {
        if ($(e.target).hasClass('popup-show')) {
            $('.popup-show').removeClass('popup-show');
            $('body').removeClass('no-overflow');
        }
    })
})
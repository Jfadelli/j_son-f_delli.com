const dealerChangeSuite = (props) => {
    const heartQS = document.querySelectorAll('.heart')
    const diamondQS = document.querySelectorAll('.diamond')
    const clubQS = document.querySelectorAll('.club')
    const spadeQS = document.querySelectorAll('.spade')

    if (props.dealerHandState[0].rank !== undefined) {
        let len = props.dealerHandState.length
        let i;
        for (i = 0; i < len; i++) {
            if (props.dealerHandState[i].suite === 'hearts') {
                try { heartQS[i].style.display = 'flex' } catch { break; }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
            if (props.dealerHandState[i].suite === 'diamonds') {
                try { heartQS[i].style.display = 'none' } catch { break; }
                try { diamondQS[i].style.display = 'flex' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
            if (props.dealerHandState[i].suite === 'spades') {
                try { heartQS[i].style.display = 'none' } catch { break; }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'none' } catch { break; }
                try { spadeQS[i].style.display = 'flex' } catch { break; }
            }
            if (props.dealerHandState[i].suite === 'clubs') {
                try { heartQS[i].style.display = 'none' } catch { break; }
                try { diamondQS[i].style.display = 'none' } catch { break; }
                try { clubQS[i].style.display = 'flex' } catch { break; }
                try { spadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    } else { return (null) }
}

const playerChangeSuite = (props) => {
    const pHeartQS = document.querySelectorAll('.player-heart')
    const pDiamondQS = document.querySelectorAll('.player-diamond')
    const pClubQS = document.querySelectorAll('.player-club')
    const pSpadeQS = document.querySelectorAll('.player-spade')

    if (props.playerHandState[0].rank !== undefined) {
        let len = props.playerHandState.length
        let i;
        for (i = 0; i < len; i++) {
            if (props.playerHandState[i].suite === 'hearts') {
                try { pHeartQS[i].style.display = 'flex' } catch { break; }
                try { pDiamondQS[i].style.display = 'none' } catch { break; }
                try { pClubQS[i].style.display = 'none' } catch { break; }
                try { pSpadeQS[i].style.display = 'none' } catch { break; }
            }
            if (props.playerHandState[i].suite === 'diamonds') {
                try { pHeartQS[i].style.display = 'none' } catch { break; }
                try { pDiamondQS[i].style.display = 'flex' } catch { break; }
                try { pClubQS[i].style.display = 'none' } catch { break; }
                try { pSpadeQS[i].style.display = 'none' } catch { break; }
            }
            if (props.playerHandState[i].suite === 'spades') {
                try { pHeartQS[i].style.display = 'none' } catch { break; }
                try { pDiamondQS[i].style.display = 'none' } catch { break; }
                try { pClubQS[i].style.display = 'none' } catch { break; }
                try { pSpadeQS[i].style.display = 'flex' } catch { break; }
            }
            if (props.playerHandState[i].suite === 'clubs') {
                try { pHeartQS[i].style.display = 'none' } catch { break; }
                try { pDiamondQS[i].style.display = 'none' } catch { break; }
                try { pClubQS[i].style.display = 'flex' } catch { break; }
                try { pSpadeQS[i].style.display = 'none' } catch { break; }
            }
        }
    } else { return (null) }
}

export {
    dealerChangeSuite,
    playerChangeSuite
}
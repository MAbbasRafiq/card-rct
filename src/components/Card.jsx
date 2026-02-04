import React from 'react'
import {Bookmark} from 'lucide-react';

const Card = () => {
  return (
     <div className="card">
            <div>
              <div className="top">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAP4AAACUCAMAAACEJ2RfAAAA4VBMVEX///8jHyD4pRsAAAD///0kHiD8//////v//f/8/Pzr6ut8e3v///n2phn7ox0hHyAXFBWLiYr3nQD29vYdGhv6oiX66cTw8PAUDhDV1NXk5OSsqqv///X3oQD4//qRj5DIx8g6ODmhn6BeW1xubG0pJie5t7hEQ0QxLi9LSkplY2RUUlP779X0vFbwv3H41p343avwqRvy3LL79eHzzID2xGv6ulr02Jf64MP+8eX4z432vmH0rDD4qUDypwD2sUHpriry2In69MT31K3stEP45ar8xX/7+NfzuWf/nBzkpCylhTWfAAANb0lEQVR4nO1dCVvaTBAOSchBTiBAggmEQ1CkHAZohVT8etn2//+gb2YTLepGkQpIyvtU+yAr2Xfn2JnZSWSYI4444ogjjjjiiCOOOOKILYCXGFlaeS0ljkwzJMC+57BryHLFOam3L84sDmGfdtv1jlOU5X1PbPuQK9WOch7RNi0rk8lYlmmT162mXynue35bBXBvIfFsNvMEWViEs7qTS60O5HwF1N0A7lka/0zGMDmu16mmcAFkJtdp25xFY/0AHHfRyTFp8wNFXzHWIJ8xDIMzFR/XKzUA0dcbnGUYL9PPwBiL657se8pvCJlxeraZWYt9BNtuSumRv3/OrU09S2Da+ZSwl5lOw15b7ndrYJn1fU/8TSAwfoO6z78A6/QkFf6v2jUzG9DP2OfVFNCXW3ZmI/oZW9n33P8WIL28vQl1hNno7Hv+fw2/u4nhR+Dy+57936KocJT4Hn5gQJ5nmyZ8NxNjQfvC2ff8/xKdhvmEFa6HaZ+d99pKPq/0zk/thAWwMgce/FUUSryTzVh2QzmJEzvJabZOn65RrP2Hnf87XZMS7llGu7PKq9qkx0VZu1fd29TfAPIJLdi1rHru0TiajQDsrr+Xeb8RcgpHI5WvPM7n5To1J8iaB731ge4/oWTYrcrTkbkLipVkM9xB+76ObTziA1kvR93NmgbN/XPNAw57i81Huo8BANemRvJOg07/gF1/JU+jTw9lKuc058flKYZyKADHbz2mn+USBveo9JUDpo/aT2BaFjnRgHCPu0gYq6SOPti4XPU7TaXVPTuFIN+EMD9B96Uk+jnq8INDBdch3277SSWMfDrpyxDhrAY5SQcYaaX/+OW/RX9dHOn/I/TR/FdNoFipOk6bGvWlkf5dP0sx58B20MwrSrt1cUZhn076sA06nZM6ku6e4Zk+ZydU/NJFn0i92qm3L7qNU8smtU7LeOboM130GdmvtxqnWSzvWusceqaKfjXfMJ4rbKeWvgCO3m9x67R3pI8+hr1+l1v/jD9d9EnN0zae83GppS9jWxNHq/j+I/QrdS7hFOcfoM9UFS5u2Ek86TUsi972dej0Zaba5jIU+tmot5O089rA/TSTQvoyOL0n+3zc05rFfu5GT8nXmycnnU4vjSlPpU49vgCYnNFrdvxqLm5kT1/CC7ROzijHXGDmFndW96urZxipo88zjHNOObkG+raVdx6VsFNHnxzzULy9YXBdv/i4CphC+j61bcOwu5Rifz51rg/P+CjSN8+qlH7N9NF37AyFvmX6pPj/CKk75ZHxfPspfZt+wp06+rkLqvQ5eqtu6ug71ATfvqA3aqet0C13KFkubHoJ7TqtlEm/SGvrMlD3aUjo7jhg+vSIj6MfcVapnX0HTL9Ca9U1rITmls4Z1fbbB9vWmaMVuAzLpI/OU+v+dutg6Tt0+hZ1cLFFa/7NmLTw+DBApQ/6TBkqM36DSj9j+7ue9luBQp/09dF6tWRq0INdrQfb15hEn6bOPqX5l4y3Lw7V+JPo5x91N8kJIUI0nvMP9G5uiudH+uD7ntA/wXIo7YkGQL91oHezV54eaGKBF6PeR/T9hk1/oEGWBMmHSJ6RKwl37lqnOUa6EyiefjoXzx2BmeZhWn+xncDK7K1GskX//PkDQK53kH29cpNW54wIOXfbmew0T186/uQO815uP5GX3aj7TjWXc/zmBWdSj7dWYHGJjcDvGVXKEQcC72LkjFZbUVoWt86d/ebZ4eV9Min0JgrWis42HywLfSTufs19s9kEPveqfo7kO51t5SC1v/Wapg4jk2gIYPwHCIlW7UvEKdelD7cONPKJWhvWZt+jh/5J97+8e8hMx1q7k49rQ5pgPt0rOPtwH+GRHPo8YVknD3l5In7QCRp7/sEL/umA94Finpx1JHY1xU0/th1V/4t1WK7snzctO+lONh45CwLPSxLDi++UP2z+imllX3hyi4U3qkcizvVW5W8a1GKPKPCMJPGiKKqqKqribjm9Bsg/80JXn32qVOM7vGTGWTkYNBsntDufeCQtCgBeEPDVO+aP9t99ppXZsM2Lk1URA/9YV+zzhLv3yd0gQgRYDdCCXfDYGL5ymtDXaXHced15eHOffx496cfuOQl1HtENgj5BEATurl0fLjesu0gcDlz6pYvLTLGjNEiEv9rciFG/2a47EvOo28Hp2ZZhcorD8H9+zKODE2GsGpRHw8n0A2K2GEw+frpCX7BDgLcB+jWRgXXANVjj4hW/qXSjB7Lewe62m/TnclYVgzutPyjy8DWGd0WeDy7ni1BjPUT0Xfs8KKtvRGwdSAJIqz/qu6gGsQKsAbnq+Hj7Ug/QVvLNDmT89HBGZnJ+xy8+eIoziB48XP/jdFwoaCyr6/hVKrEA73px9Ra81oToSqL7cbz80edhSqKK7mdNyJVcrgrI5Z59IC91VQQ1GM60gscicQCrAVidLel6+Om1HP4CUg1Yfy0V2M/DAPyvqu7iKdO8KgRT0HZd9wox4EWJLIAXlncwg3sI4ILcYeix4+XwCnzALiJyXpVHGuj9cjGYz4cjxHwx9lhdu9Z2TB8UgBdrl0vvl35981+Ayi+gE5AkSdyaExIE9/ZL4AJUGRwBRLtgDd81sIGw8HmXyh9BdMtLcEK693t4xQgScf8Yh231onAB8IcY6rkuLrg7K4ArKMz6W70qDRBvBlOvoJd+FcbzAMJQQVRrr/CCGwJX2FVVEvkJkjAH+po3DbZ9Wco8JCGYhyG6Hk+blF1egDCA37IblKNED1KdGhqAMET67MTd7lWfgsdNj2G+fvNY9L4Fdvo9UCVJqG1X/iKYmXv1aT79GMiMwAiTAiw/O9p9vgvs0d/1ZxruxBB8eMtJH1wTee+tp3P/eeD5+h8/aLD5DVW4Ctq+7i137PijGQkMGLzgzkMP3C/EIbAtLYZ9l8eNkY9X4C4j2GBB+CigxJg6Si/Q4QXfp0vWA40vTALQ/QA8v+4tgq27nCQA/8sFCxbAYhhW8JY/RuVAJdkoj6kRmTrPbFCOIVlsXMeR0bG4/cv5bHyt65qmF5blmiAyX2DldXa47Q0nEbwIBtifLwvIfzxGN8gup6NPsAIQpZK6BHypm8geFScSvsSAwSN3EvXp7NjzfpZdSa4xQ9x6l2VhX8U+3H9RAaZaHIuzmI2Nl9P5JZgBagCyeD19NB+ZEWvg38HPB+Xhj1kIOoZGxmqFEHdaia+JswL43YG7P92H3JcHfx+MliAZdszCP5ihXvDC2Y+v5QCUg5ck/tW1SLJqYDmQUtxezqdLWF29gGuLHw2ih/fB9Psl+EF4yWygXW8DNXJRvFDrz28gBdHZO4AVaOFsMLy8JTHJJhMEqY/mP5ehDoEFSBnVC9iHoysBw16wiIkesoWFu4lneRuohDz4ONgG+hOMQMExaSXIxEvgCXWYdjhbzLE2QApzMGsZMgOirFGlTsRKDfoI8obE8PGfZ1Ld8nCwWAJrDGxCZI9L640nfRF/nQedg21P08OvzLZjrfUAGjArFHRQAcjColycSKwAfjFc/pyM+lckUhdIrdZVycbA49rxEXPiv3n3tjxEmeNeGn0AJLmgWLCcHjspw157J+wyrMqvqSrU9if+FUDeL35fetdaqURqEfq9JWBQgMUpNlwMBsPRlzLERyDflTmLLrAug8AHH36Hmke0PVZ43FPwozyvAEbPSEL8i4I40W/Y8Jap1YTa/umLqiCJsAsONBDVL11j74XHRlyIFHEZsFRxPR6Hv39/I7i50ViN1O3wHazklIiyxx8AL25Y8KWDW9hLYbePq9rC7TdIuL+Dc+TfwykXzMMVwXLV/mB57XmlknZ9L3xwBRCtjG/GWlyoYv+4MuB8X8CKds54yL0ThVfach6A1oOUJdgPogsOx9qv/5gdVZteBKZA6NzAOIPhNLy+YxCrMREqekQQtP4HsX7EIx8MZyPd99hSuPgeMOQ8h78PBBl3URiD4ZPay/6FTyBFhW9QhPJkFoIFs5r2hx7JDNjIpDV2xbpXl+k+eiL/wUeEH+ZfXMwjMMsX+ai6zItMfxlCni8z7++EUwYfLgYjsgKFSMRe5MSexx+FiFYKuP8clgMk7z48xwJVuxqOgs3iia0DZKTWME7/MftMAqAXeN+zj00A8zjcLOeXgSpCnCDUHh1jwueLEOuCmu2J4bMA7yyDvFRYgU/DwYcQ3Vu8ATzHP3oXswY2nM1HGDMDQVGsiY//ViWG0ZAQiO9T+qQYEhc+1aB/OZwSLfDYZ/lrGqnhs9+mkyGInZRzBGLbqkjb2t6bzd9DrJF0BQM5Mkc1wDWYLCBMw61/xRvGniHa9cHNDeajS7B2EaIb0CD4XR6DPJ6n0Of5HZRWN8Ld1swIKxNX3aurfnk4mSxm35ZhKfL1qOdg5cvFACQO0eCVG42X0MlH6VRSTMPz75N8MtCHua57RU7ny3cg5/SuC2kADtn3HLcITG2w+CFiQ04NgYk7Qa0GQY30HsLXLYKP+lHugedjAvoJUs9Db5Fm+rX7ZhyelwnIhkaKF3EZIO3g4wp2pPNRGZyUhPn33J/4RljhR7g+tIW0sz/iiCOOOOKII4444ojd43/NJyZ6PnDN/AAAAABJRU5ErkJggg==" alt="" />
                <button>Save <Bookmark size={12}  /> </button>
            </div>
    
            <div className="center">
              <h3>Amazon <span>5 days ago</span></h3>
              <h2 >Senior UI/UX Designer</h2>
              <div className="tag">
                <h4>Part Time</h4>
                <h4>Senior Level</h4>
              </div>
            </div>
            </div>
    
    
    
            <div className="bottom">
              <div>
                <h3>$120/hr</h3>
                <p>Lahore, Pakistan</p>
              </div>
              <button>Apply now</button>
    
            </div>
    
          </div>
    
  )
}

export default Card

# 이더리움 주소와 토큰 만들기 / ethereum-adress-token

-  오픈소스를 활용한 이더리움 세트 메뉴

## 주소 생성 콘솔 미리보기 / preview ethereum-address-maker

![image1](ethereum-address-maker/i1.png)

![image2](ethereum-address-maker/i2.png)

## erc20 토큰 생성 미리보기 / preview ethereum-erc20-token

```solidity
pragma solidity ^0.5.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20Detailed.sol";

contract ERC20Token is ERC20, ERC20Detailed {
    // 초기 할당량
    uint256 public INITIAL_SUPPLY = 12000;
                                // 이름, 심볼, 소수자리
    constructor() ERC20Detailed("ERC20", "ERC", 18) public {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}
```

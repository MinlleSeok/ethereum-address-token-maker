# Ethereum ERC20 Token

- openzeppelin source를 이용한 ERC20 Token 발행
- contracts/ERC20Token.sol을 편집하면 됩니다.

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

## 솔리디티 컴파일 하기 - Compile Sol

```bash
truffle compile
```

- 배포하기 전, `.env` 파일에
- `INFURA_API_KEY=asdasd...`
- `PRIVATE_KEY=0xasdasd...`
- 입력하셔야 합니다.

### 솔리디티 이주(배포) 하기 - Migrate(Deploy) Sol

```bash
truffle migrate [--reset] --network [network-name]
```

---

## 추가 기능

### 솔리움(솔리티디 문법 검사) 시작하기 - Solium init

```bash
node_modules/.bin/solium --init
```

### 솔리움, 솔리디티 파일 검사하기 / Solium - File Check

```bash
node_modules/.bin/solium -f ./contracts/[contract_file].sol
```

### 솔리움, 보안 규칙 검사 / Solium - Security Rule check

```bash
node_modules/.bin/solium -d ./contracts/
```

### 솔리디티 파일 한 파일로 통합하기 / truffle-flattener - Flatten File

```bash
node_modules/.bin/truffle-flattener ./contracts/[contract_file].sol
```

### 솔리디티 커버리지 검사기 / solidity-coverage

```bash
node_modules/.bin/solidity-coverage
```

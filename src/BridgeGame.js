const { generateRandomNumber, makeBridge } = require("./BridgeMaker");
const { readBridgeSize } = require("./InputView");

/**
 * 다리 건너기 게임을 관리하는 클래스
 */
class BridgeGame {
  /**
   * 사용자가 칸을 이동할 때 사용하는 메서드
   * <p>
   * 이동을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  constructor() {
    this.bridge = makeBridge();
    this.state = [];
    this.currentPos = 0;
    this.isLastStep = false;
    this.isGameOver = false;
    this.tryCount = 0;
  }

  move(userInput) {
    const currentSide = this.bridge[this.currentPos];

    if(currentSide === userInput) this.state.push('O'); 
    else this.state.push('X');

    this.currentPos+=1;

    if(this.currentPos === this.bridge.length){
      this.isLastStep = true;
    }
    if(this.state[this.state.length- 1] === false){
      this.isGameOver = true;
    }

    return this.state[this.state.length - 1];
  }



  /**
   * 사용자가 게임을 다시 시도할 때 사용하는 메서드
   * <p>
   * 재시작을 위해 필요한 메서드의 반환 값(return value), 인자(parameter)는 자유롭게 추가하거나 변경할 수 있다.
   */
  retry(toRetry) {
    if(toRetry === true){
      this.state = [];
      this.currentPos = 0;
      this.isLastStep = false;
      this.isGameOver = false;
      this.tryCount += 1;

      return true;
    }
    else{
      return false;
    }

  }
}

module.exports = BridgeGame;

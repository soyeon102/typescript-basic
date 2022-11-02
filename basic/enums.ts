// enum - 명명된 상수 집합을 정의. 반복적으로 참조하는 값의 집합이 있는 경우 사용
// 기본값은 0부터 시작해서 1씩 증가
enum OrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}
isDelivered(OrderStatus.RETURNED);

// 값은 직접 지정 가능
enum ArrowKeys {
  UP = 'up',
  DOWN = 'down',
  LEFT = 'left',
  RIGHT = 'right',
}

/* 
  const는 변수로 지정한다는 뜻이 아닌 
  자바스크립트로 컴파일할 때 직접 지정된 값을 넣어주는 것
*/
const enum AnotherOrderStatus {
  PENDING,
  SHIPPED,
  DELIVERED,
  RETURNED,
}

/* 
------------------ TS enum 타입 ------------------
  enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
  }

  const order = {
    orderNumber: 3132341,
    status: OrderStatus.PENDING
  }  

  const order2 = {
      orderNumber: 4534232,
      status: OrderStatus.DELIVERED
  }
  ------------------ JS 컴파일 ------------------
  "use strict";
  var OrderStatus;
  (function (OrderStatus) {
      OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
      OrderStatus[OrderStatus["SHIPPED"] = 1] = "SHIPPED";
      OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
      OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
  })(OrderStatus || (OrderStatus = {}));

  const order = {
      orderNumber: 3132341,
      status: OrderStatus.PENDING
  };

  const order2 = {
    orderNumber: 4534232,
    status: OrderStatus.DELIVERED
  };

------------------ TS const enum 타입 ------------------
  const enum OrderStatus {
    PENDING,
    SHIPPED,
    DELIVERED,
    RETURNED,
  }

  const order = {
      orderNumber: 3132341,
      status: OrderStatus.PENDING
  }
  
  const order2 = {
      orderNumber: 4534232,
      status: OrderStatus.DELIVERED
  }
------------------ JS 컴파일 ------------------
  "use strict";
  const order = {
    orderNumber: 3132341,
    status: 0 // OrderStatus.PENDING
  };

  const order2 = {
    orderNumber: 4534232,
    status: 2 // OrderStatus.DELIVERED
  };
*/

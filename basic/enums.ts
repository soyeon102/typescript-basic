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

// two sum//
//brute force O(n2)
var twoSum = function (nums, target) {
  for (let i = 0; i < array.length; i++) {
    let current = nums[i];
    for (let j = 0; j < array.length; j++) {
      if (i == j) continue;
      else if (current + nums[j] == target) return [i, j];
    }
  }
};
//hashmap: O(n)
var twoSum = function (nums, target) {
  const hashmap = {};
  for (let i = 0; i < nums.length; i++) {
    let current = nums[i];
    let numToFind = target - current;
    if (hashmap.hasOwnProperty(numToFind)) return [hashmap[numToFind], i];
    hashmap[current] = i;
  }
};

// Merge Two Sorted Lists: O(m+n)
var mergeTwoLists = function (list1, list2) {
  tempHead = new ListNode();
  current = tempHead;
  while (list1 && list2) {
    if (list1.val > list2.val) {
      current.next = list2;
      list2 = list2.next;
    } else {
      current.next = list1;
      list1 = list1.next;
    }
    current = current.next;
  }
  return tempHead.next;
};

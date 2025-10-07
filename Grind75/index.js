// two sum //
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

// Merge Two Sorted Lists: O(m+n) //
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

// 121. Best Time to Buy and Sell Stock //
//Brute force O(n2)
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    let buy = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let sell = prices[j];
      const tempProfit = sell - buy;
      if (tempProfit <= 0) continue;
      else {
        if (tempProfit > profit) profit = tempProfit;
      }
      //  profit = tempProfit > profit ? tempProfit : profit
    }
  }
  return profit;
};
// O(n)
var maxProfit = function (prices) {
  if (prices.length < 2) return 0;

  let max = 0;
  let low = 0;
  let high = 1;

  while (high < prices.length) {
    const profit = prices[high] - prices[low];

    if (profit < 0) {
      // found a new lower buy price
      low = high;
    } else if (profit > max) {
      max = profit;
    }
    high++;
  }
  return max;
};

// 125. valid palindrome
var isPalindrome = function (s) {
  const normalized = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0;
  let right = normalized.length - 1;
  while (left < right) {
    if (normalized[left] !== normalized[right]) return false;
    left++;
    right--;
  }
  return true;
};

/**
 * 求最大连续子序列和
 * 分析: 目标序列的结束位只有n种.dp[i]用于存放i结尾时,最大连续序列和.
 * 那么对于i结尾的最大和只有两种情况.自身nums[i]或者 dp[i - 1] + nums[i]
 * 边界 dp[0] = nums[0]
 */
function maxSum(nums) {
  // 为节约内存,采用的数组篡改
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i - 1] + nums[i], nums[i])
  }
  return Math.max(...nums)
}
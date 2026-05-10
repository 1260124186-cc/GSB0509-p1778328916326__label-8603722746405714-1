// Price Range Data (Provided)
export const priceRangeData = [
  { name: '30元以下', value: 3985 },
  { name: '30-60元', value: 4181 },
  { name: '60-100元', value: 1279 },
  { name: '100-150元', value: 153 },
  { name: '150-200元', value: 423 },
];

// Flavor List (Provided)
const flavorsList = [
  "爽口", "微辣", "咸鲜", "果味", "香辣", "清淡", "甜", "香酥",
  "蒜香", "麻辣", "奶香", "葱香", "清香", "酸辣", "原味", "酱香",
  "酸甜", "香甜", "辣", "柠檬味", "酸", "蒜蓉", "香草味", "油腻", "中辣"
];

// Mock Flavor Data (Generating random counts)
export const flavorData = flavorsList.map(flavor => ({
  name: flavor,
  value: Math.floor(Math.random() * 2000) + 100 // Random count between 100 and 2100
})).sort((a, b) => b.value - a.value); // Sort by popularity

// Mock User Data
export const userDemographics = {
  gender: [
    { name: '男', value: 5400 },
    { name: '女', value: 4621 },
  ],
  age: [
    { name: '18岁以下', value: 800 },
    { name: '18-24岁', value: 2500 },
    { name: '25-34岁', value: 3800 },
    { name: '35-44岁', value: 1900 },
    { name: '45岁以上', value: 1021 },
  ]
};

// Mock Sales Trend Data (Last 7 days)
export const salesTrendData = {
  dates: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  values: [820, 932, 901, 934, 1290, 1330, 1320]
};

// Top Dishes Mock
export const topDishes = [
  { name: "麻婆豆腐", sales: 1200 },
  { name: "宫保鸡丁", sales: 1150 },
  { name: "糖醋里脊", sales: 980 },
  { name: "手工水饺", sales: 850 },
  { name: "扬州炒饭", sales: 780 },
];

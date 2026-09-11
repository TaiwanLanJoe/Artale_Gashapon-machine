/**
 * Artale 楓之谷轉蛋機 - 官方機率資料庫與道具圖標映射
 * 包含三大轉蛋池：月光祭轉蛋券、每週突襲重置卷軸精選轉蛋券(突襲1)、每週突襲重置卷軸精選轉蛋券(突襲2)
 */

// 道具圖標映射函數 (對應 images/ 目錄中的高畫質楓之谷原版素材)
function getItemIcon(name) {
  // 1. 藥水系列
  if (name.includes('超級藥水')) return './images/power-elixir.webp';
  if (name.includes('黃昏之露')) return './images/sunset-dew.webp';
  if (name.includes('清晨之露')) return './images/sunrise-dew.webp';
  if (name.includes('馴鹿奶')) return './images/reindeer-milk.webp';

  // 2. 騎寵系列
  if (name.includes('騎寵')) return './images/mount.webp';

  // 3. 卷軸系列 (突襲轉蛋券Ⅰ & Ⅱ)
  if (name.includes('每週突襲重置卷軸')) return './images/reset-scroll.webp';
  if (name.includes('10%')) return './images/scroll-10.webp';
  if (name.includes('30%')) return './images/scroll-30.webp';
  if (name.includes('60%')) return './images/scroll-60.webp';
  if (name.includes('70%')) return './images/scroll-70.webp';
  if (name.includes('100%')) return './images/scroll-100.webp';
  if (name.includes('卷軸')) return './images/scroll-60.webp';
  if (name.includes('箱') && !name.includes('椅')) return './images/box.webp';

  // 4. 其餘全部（月光祭非藥水、非騎寵的所有品項，包含各類椅子、字型、戒指、裝飾道具）統一使用經典休閒椅
  return './images/chair.webp';
}

// 轉蛋機率表資料庫
const GACHA_POOLS = [
  {
    "id": "moonlight",
    "name": "月光祭轉蛋券",
    "shortName": "🌕 月光祭",
    "ticketName": "月光祭轉蛋券",
    "description": "除騎寵造型、傷害字型造型、裝飾戒指外皆可交易",
    "items": [
      {
        "name": "滿月傷害字型",
        "weight": 0.0000125,
        "rate": 0.00125,
        "isLucky": true
      },
      {
        "name": "狐狸月亮騎寵",
        "weight": 0.0009090909,
        "rate": 0.09090909,
        "isLucky": true
      },
      {
        "name": "美味松糕騎寵",
        "weight": 0.0009090909,
        "rate": 0.09090909,
        "isLucky": true
      },
      {
        "name": "深夜蝴蝶庭園",
        "weight": 0.0009090909,
        "rate": 0.09090909,
        "isLucky": true
      },
      {
        "name": "休菲凱曼的直火炭烤椅子",
        "weight": 0.0009090909,
        "rate": 0.09090909,
        "isLucky": true
      },
      {
        "name": "經典餐車椅",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "華麗餐車椅",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "森林裡休息椅子：木屋",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "迎月花大臉椅子",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "可愛兔兔名牌戒指",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "可愛兔兔聊天戒指",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "夏鈴名牌戒指",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "夏鈴聊天戒指",
        "weight": 0.0018181818,
        "rate": 0.18181818,
        "isLucky": false
      },
      {
        "name": "殺人鯨的兔子之愛椅子",
        "weight": 0.0027272727,
        "rate": 0.27272727,
        "isLucky": false
      },
      {
        "name": "與兔子一同慵懶椅子",
        "weight": 0.0027272727,
        "rate": 0.27272727,
        "isLucky": false
      },
      {
        "name": "月光玻璃杯",
        "weight": 0.0027272727,
        "rate": 0.27272727,
        "isLucky": false
      },
      {
        "name": "大熊娃娃椅子",
        "weight": 0.0027272727,
        "rate": 0.27272727,
        "isLucky": false
      },
      {
        "name": "跳跳兔禮物包裝貨車",
        "weight": 0.0027272727,
        "rate": 0.27272727,
        "isLucky": false
      },
      {
        "name": "搗麻糬椅子",
        "weight": 0.0036363636,
        "rate": 0.36363636,
        "isLucky": false
      },
      {
        "name": "烏鴉與我椅子",
        "weight": 0.0036363636,
        "rate": 0.36363636,
        "isLucky": false
      },
      {
        "name": "迎月花椅子",
        "weight": 0.0036363636,
        "rate": 0.36363636,
        "isLucky": false
      },
      {
        "name": "梅好的夜晚",
        "weight": 0.0036363636,
        "rate": 0.36363636,
        "isLucky": false
      },
      {
        "name": "殺人鯨的兔娃娃",
        "weight": 0.0036363636,
        "rate": 0.36363636,
        "isLucky": false
      },
      {
        "name": "玩偶之家",
        "weight": 0.0036363636,
        "rate": 0.36363636,
        "isLucky": false
      },
      {
        "name": "星光灑滿的山丘椅子",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "美夢枕",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "保冷箱椅子",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "貓咪椅子",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "遠東福運椅",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "煙花椅子",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "聊天用貓咪坐墊椅子",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "圖書館椅子(領導)",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "圖書館椅子(感性)",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "圖書館椅子(洞察)",
        "weight": 0.037996875,
        "rate": 3.7996875,
        "isLucky": false
      },
      {
        "name": "圖書館椅子(意志)",
        "weight": 0.037996875,
        "rate": 3.7996875,
        "isLucky": false
      },
      {
        "name": "圖書館椅子(手藝)",
        "weight": 0.037996875,
        "rate": 3.7996875,
        "isLucky": false
      },
      {
        "name": "圖書館椅子(魅力)",
        "weight": 0.037996875,
        "rate": 3.7996875,
        "isLucky": false
      },
      {
        "name": "超級藥水 10個(可交易)",
        "weight": 0.0443333333,
        "rate": 4.43333333,
        "isLucky": false
      },
      {
        "name": "超級藥水 15個(可交易)",
        "weight": 0.038,
        "rate": 3.8,
        "isLucky": false
      },
      {
        "name": "超級藥水 20個(可交易)",
        "weight": 0.0316666667,
        "rate": 3.16666667,
        "isLucky": false
      },
      {
        "name": "黃昏之露 10個(可交易)",
        "weight": 0.0494545457,
        "rate": 4.94545457,
        "isLucky": false
      },
      {
        "name": "黃昏之露 30個(可交易)",
        "weight": 0.0443333333,
        "rate": 4.43333333,
        "isLucky": false
      },
      {
        "name": "黃昏之露 50個(可交易)",
        "weight": 0.038,
        "rate": 3.8,
        "isLucky": false
      },
      {
        "name": "清晨之露 20個(可交易)",
        "weight": 0.0494545455,
        "rate": 4.94545455,
        "isLucky": false
      },
      {
        "name": "清晨之露 40個(可交易)",
        "weight": 0.0443333333,
        "rate": 4.43333333,
        "isLucky": false
      },
      {
        "name": "清晨之露 60個(可交易)",
        "weight": 0.038,
        "rate": 3.8,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 30個(可交易)",
        "weight": 0.0494545455,
        "rate": 4.94545455,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 50個(可交易)",
        "weight": 0.0443333333,
        "rate": 4.43333333,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 70個(可交易)",
        "weight": 0.038,
        "rate": 3.8,
        "isLucky": false
      }
    ]
  },
  {
    "id": "weekly_raid_1",
    "name": "每週突襲重置卷軸精選轉蛋券Ⅰ",
    "shortName": "⚔️ 突襲 Ⅰ",
    "ticketName": "每週突襲重置卷軸精選轉蛋券Ⅰ",
    "description": "力量/幸運系列 30% 卷軸、每週突襲重置卷軸、純白卷軸箱、戒指卷軸箱",
    "items": [
      {
        "name": "戒指卷軸箱",
        "weight": 0.000008333331606991,
        "rate": 0.0008333331606991,
        "isLucky": true
      },
      {
        "name": "臉部裝飾力量卷軸30%",
        "weight": 0.000083333316069911,
        "rate": 0.0083333316069911,
        "isLucky": true
      },
      {
        "name": "臉部裝飾幸運卷軸30%",
        "weight": 0.000083333316069911,
        "rate": 0.0083333316069911,
        "isLucky": true
      },
      {
        "name": "純白卷軸箱",
        "weight": 0.000104166656456072,
        "rate": 0.0104166656456072,
        "isLucky": true
      },
      {
        "name": "每週突襲重置卷軸",
        "weight": 0.000104166656456072,
        "rate": 0.0104166656456072,
        "isLucky": true
      },
      {
        "name": "眼部裝飾力量卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "腰帶敏捷卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "墜飾力量卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "眼部裝飾幸運卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "腰帶幸運卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "墜飾智力卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "套服力量詛咒卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "下衣敏捷性卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "耳環智力卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "套服幸運詛咒卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "頭盔智力卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "披風敏捷性卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "上衣力量卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "短杖魔力卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "套服敏捷詛咒卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "披風智力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "矛攻擊力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "短劍攻擊力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "指虎攻擊力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "鞋子跳躍力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "指虎命中率卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "弩攻擊力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "鞋子移動速度卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "下衣跳躍卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "下衣體力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "單手劍命中率卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "手套體力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "單手劍攻擊力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "盾牌防禦力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "下衣防禦力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "上衣防禦力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "頭盔防禦卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "披風物理防禦力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "單手斧命中率卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "單手棍命中率卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "雙手棍攻擊力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "披風魔法防禦力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "槍命中率卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "超級藥水 10個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "超級藥水 15個(可交易)",
        "weight": 0.058714375004856094,
        "rate": 5.87143750048561,
        "isLucky": false
      },
      {
        "name": "超級藥水 20個(可交易)",
        "weight": 0.0572143750048561,
        "rate": 5.72143750048561,
        "isLucky": false
      },
      {
        "name": "黃昏之露 10個(可交易)",
        "weight": 0.0617143750048562,
        "rate": 6.17143750048562,
        "isLucky": false
      },
      {
        "name": "黃昏之露 30個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "黃昏之露 50個(可交易)",
        "weight": 0.058714375004856094,
        "rate": 5.87143750048561,
        "isLucky": false
      },
      {
        "name": "清晨之露 20個(可交易)",
        "weight": 0.0617143750048562,
        "rate": 6.17143750048562,
        "isLucky": false
      },
      {
        "name": "清晨之露 40個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "清晨之露 60個(可交易)",
        "weight": 0.058714375004856094,
        "rate": 5.87143750048561,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 30個(可交易)",
        "weight": 0.0617143750048562,
        "rate": 6.17143750048562,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 50個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 70個(可交易)",
        "weight": 0.0586102083484014,
        "rate": 5.86102083484014,
        "isLucky": false
      }
    ]
  },
  {
    "id": "weekly_raid_2",
    "name": "每週突襲重置卷軸精選轉蛋券Ⅱ",
    "shortName": "🏹 突襲 Ⅱ",
    "ticketName": "每週突襲重置卷軸精選轉蛋券Ⅱ",
    "description": "敏捷/智力系列 30% 卷軸、每週突襲重置卷軸、純白卷軸箱、戒指卷軸箱",
    "items": [
      {
        "name": "戒指卷軸箱",
        "weight": 0.000008333331606991,
        "rate": 0.0008333331606991,
        "isLucky": true
      },
      {
        "name": "臉部裝飾敏捷卷軸30%",
        "weight": 0.000083333316069911,
        "rate": 0.0083333316069911,
        "isLucky": true
      },
      {
        "name": "臉部裝飾智力卷軸30%",
        "weight": 0.000083333316069911,
        "rate": 0.0083333316069911,
        "isLucky": true
      },
      {
        "name": "純白卷軸箱",
        "weight": 0.000104166656456072,
        "rate": 0.0104166656456072,
        "isLucky": true
      },
      {
        "name": "每週突襲重置卷軸",
        "weight": 0.000104166656456072,
        "rate": 0.0104166656456072,
        "isLucky": true
      },
      {
        "name": "腰帶力量卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "眼部裝飾智力卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "墜飾敏捷卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "眼部裝飾敏捷卷軸30%",
        "weight": 0.000124999996842234,
        "rate": 0.0124999996842234,
        "isLucky": true
      },
      {
        "name": "墜飾幸運卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "腰帶智力卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "耳環敏捷卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "頭盔敏捷卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "套服智力詛咒卷軸30%",
        "weight": 0.000200000022232416,
        "rate": 0.0200000022232416,
        "isLucky": true
      },
      {
        "name": "拳套攻擊力卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "手套攻擊力卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "披風幸運卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "雙手劍攻擊力卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "上衣幸運卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "披風力量卷軸30%",
        "weight": 0.00033333335522911495,
        "rate": 0.0333333355229115,
        "isLucky": true
      },
      {
        "name": "長杖魔力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "弓攻擊力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "耳環幸運卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "盾牌幸運卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "手套敏捷性卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "槍攻擊力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "火槍攻擊力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "盾牌力量卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "耳環體力卷軸30%",
        "weight": 0.0008888889169611499,
        "rate": 0.088888891696115,
        "isLucky": true
      },
      {
        "name": "鞋子敏捷性卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "頭盔體力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "披風體力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "雙手斧攻擊力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "雙手劍命中率卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "單手斧攻擊力卷軸30%",
        "weight": 0.017582023774211898,
        "rate": 1.75820237742119,
        "isLucky": false
      },
      {
        "name": "上衣體力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "套服防禦詛咒卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "披風魔力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "單手棍攻擊力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "雙手斧命中率卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "盾牌體力卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "雙手棍命中率卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "矛命中率卷軸30%",
        "weight": 0.0205820237742119,
        "rate": 2.05820237742119,
        "isLucky": false
      },
      {
        "name": "超級藥水 10個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "超級藥水 15個(可交易)",
        "weight": 0.058714375004856094,
        "rate": 5.87143750048561,
        "isLucky": false
      },
      {
        "name": "超級藥水 20個(可交易)",
        "weight": 0.0572143750048561,
        "rate": 5.72143750048561,
        "isLucky": false
      },
      {
        "name": "黃昏之露 10個(可交易)",
        "weight": 0.0617143750048562,
        "rate": 6.17143750048562,
        "isLucky": false
      },
      {
        "name": "黃昏之露 30個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "黃昏之露 50個(可交易)",
        "weight": 0.058714375004856094,
        "rate": 5.87143750048561,
        "isLucky": false
      },
      {
        "name": "清晨之露 20個(可交易)",
        "weight": 0.0617143750048562,
        "rate": 6.17143750048562,
        "isLucky": false
      },
      {
        "name": "清晨之露 40個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "清晨之露 60個(可交易)",
        "weight": 0.058714375004856094,
        "rate": 5.87143750048561,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 30個(可交易)",
        "weight": 0.0617143750048562,
        "rate": 6.17143750048562,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 50個(可交易)",
        "weight": 0.0602143750048561,
        "rate": 6.02143750048561,
        "isLucky": false
      },
      {
        "name": "馴鹿奶 70個(可交易)",
        "weight": 0.0586102083484014,
        "rate": 5.86102083484014,
        "isLucky": false
      }
    ]
  }
].map(pool => ({
  ...pool,
  items: pool.items.map(item => ({
    ...item,
    icon: getItemIcon(item.name)
  }))
}));

// 提供全域與模組導出相容
if (typeof window !== 'undefined') {
  window.GACHA_POOLS = GACHA_POOLS;
  window.getItemIcon = getItemIcon;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { GACHA_POOLS, getItemIcon };
}

// 精神状态评估 - 15种人格库

// 25题映射到5维度
// 维度：清醒度、摆烂度、社交欲、情绪化、掌控欲
var dimensionMapping = [
    { dim: "awake", reverse: false },   // 1
    { dim: "emotional", reverse: false }, // 2
    { dim: "control", reverse: false },  // 3
    { dim: "social", reverse: true },    // 4 (享受独处 = 社交欲低)
    { dim: "emotional", reverse: false }, // 5
    { dim: "awake", reverse: true },     // 6 (迷茫 = 清醒度低)
    { dim: "emotional", reverse: true },  // 7 (恢复快 = 情绪化低)
    { dim: "social", reverse: false },    // 8 (不自在 = 社交欲低)
    { dim: "emotional", reverse: false }, // 9
    { dim: "awake", reverse: false },     // 10
    { dim: "social", reverse: false },    // 11 (合群 = 社交欲高)
    { dim: "awake", reverse: true },      // 12
    { dim: "slack", reverse: false },     // 13 (躺平 = 摆烂度高)
    { dim: "control", reverse: false },   // 14 (不计较 = 掌控欲低)
    { dim: "emotional", reverse: false }, // 15
    { dim: "slack", reverse: false },     // 16
    { dim: "emotional", reverse: false }, // 17
    { dim: "slack", reverse: false },     // 18
    { dim: "social", reverse: false },    // 19
    { dim: "control", reverse: false },   // 20
    { dim: "awake", reverse: false },     // 21
    { dim: "control", reverse: false },   // 22
    { dim: "slack", reverse: false },     // 23
    { dim: "slack", reverse: false },     // 24
    { dim: "emotional", reverse: false }  // 25
];

// 15种人格
var personalityTypes = [
    { name: "人间观察员", code: "OBSERVER", tag: "疏离·通透",
      desc: "你是朋友圈里的'已读不回专业户'。世界纷纷扰扰，你静静看着，不是冷漠，是选择性热情。",
      slogan: "你的热情，与你无关",
      profile: [4,4,2,2,3] },  // [清醒,摆烂,社交,情绪,掌控]
    { name: "人间清醒", code: "SOBER", tag: "通透·淡定",
      desc: "你看透一切，但不说破。别人在卷，你在看；别人在焦虑，你在喝茶。",
      slogan: "众生皆苦，你是甜的",
      profile: [5,3,3,2,4] },
    { name: "漂浮者", code: "FLOAT", tag: "随波逐流",
      desc: "你像一片叶子，随风飘荡。不挣扎，不反抗，反正到哪都是风景。",
      slogan: "随波逐流，也挺好",
      profile: [3,4,2,2,2] },
    { name: "躺平大师", code: "LAY", tag: "拒绝内卷",
      desc: "能躺着绝不坐着，能坐着绝不站着。你的座右铭：生命在于静止。",
      slogan: "已躺平，勿扰",
      profile: [2,5,2,2,2] },
    { name: "树懒本懒", code: "SLOTH", tag: "慢但快乐",
      desc: "你做事很慢，但很快乐。世界在加速，你在减速。",
      slogan: "慢，但快乐",
      profile: [2,4,3,2,2] },
    { name: "佛系玩家", code: "ZEN", tag: "随缘不争",
      desc: "随缘，不争不抢。赢了微微一笑，输了下次再来。",
      slogan: "爱咋咋地",
      profile: [3,4,3,2,2] },
    { name: "精神内耗师", code: "OVERTHINK", tag: "内心戏王",
      desc: "你的大脑是一部永动机，每天都在上演连续剧。建议：给自己放个假。",
      slogan: "脑子：我不累",
      profile: [2,3,3,5,3] },
    { name: "拖延症晚期", code: "PROCRA", tag: "DDL战神",
      desc: "deadline是第一生产力。不到最后一刻，绝不行动。",
      slogan: "明天再说明天的",
      profile: [2,4,3,3,2] },
    { name: "社恐重症", code: "SOCIAL", tag: "社交恐惧",
      desc: "能打字绝不语音，能线上绝不见面。你的理想社交：0人。",
      slogan: "别找我，谢谢",
      profile: [3,3,2,3,2] },
    { name: "卷心菜", code: "ROLL", tag: "卷不动躺不平",
      desc: "想卷卷不动，想躺躺不平。你是一颗矛盾的卷心菜。",
      slogan: "卷又卷不动",
      profile: [3,2,3,3,4] },
    { name: "搞钱人", code: "HUSTLE", tag: "一心搞钱",
      desc: "你的眼里只有钱。恋爱可以晚点谈，钱必须早点赚。",
      slogan: "搞钱要紧",
      profile: [4,2,3,2,4] },
    { name: "计划狂魔", code: "PLANNER", tag: "控制狂",
      desc: "你连上厕所都要列计划。失控是你最大的恐惧。",
      slogan: "人生需要Ctrl+S",
      profile: [3,2,2,2,5] },
    { name: "情感绝缘体", code: "STONE", tag: "心如磐石",
      desc: "心如磐石，不为所动。不是不想爱，是懒得爱。",
      slogan: "莫挨老子",
      profile: [4,3,2,2,4] },
    { name: "恋爱脑晚期", code: "DEPEND", tag: "上头快下头慢",
      desc: "上头快，下头慢。一谈恋爱就失智。",
      slogan: "醒醒，姐妹",
      profile: [2,2,4,5,2] },
    { name: "边界大师", code: "BOUNDARY", tag: "生人勿近",
      desc: "你的热情与我无关。你的边界，没有人能越过。",
      slogan: "关我什么事",
      profile: [4,3,2,2,4] }
];

function calculateScores(answers) {
    var scores = { awake: 0, slack: 0, social: 0, emotional: 0, control: 0 };
    var counts = { awake: 0, slack: 0, social: 0, emotional: 0, control: 0 };
    
    for (var i = 0; i < answers.length; i++) {
        var answer = answers[i];
        if (answer === null) continue;
        var mapping = dimensionMapping[i];
        var score = answer;
        if (mapping.reverse) score = 6 - answer;
        scores[mapping.dim] += score;
        counts[mapping.dim]++;
    }
    
    for (var dim in scores) {
        if (counts[dim] > 0) {
            scores[dim] = Math.round((scores[dim] / (counts[dim] * 5)) * 5);
        }
    }
    return scores;
}

function getPersonality(scores) {
    var bestMatch = null;
    var bestDistance = 100;
    
    for (var i = 0; i < personalityTypes.length; i++) {
        var p = personalityTypes[i];
        var distance = 0;
        for (var j = 0; j < 5; j++) {
            distance += Math.abs(scores[Object.keys(scores)[j]] - p.profile[j]);
        }
        if (distance < bestDistance) {
            bestDistance = distance;
            bestMatch = p;
        }
    }
    return bestMatch;
}

function getResultType(totalScore) {
    if (totalScore <= 50) return { type: "精神状态稳定", desc: "你的精神状态保持得不错，继续加油~" };
    if (totalScore <= 80) return { type: "精神状态一般", desc: "偶尔emo，但还能撑住" };
    if (totalScore <= 110) return { type: "精神状态堪忧", desc: "你可能需要给自己放个假了" };
    return { type: "精神状态崩溃", desc: "建议：立即休息，明天再说" };
}
const questions = [
    { id: 1, text: "当遇到与自己长期信念相悖的新信息时，我愿意认真审视并可能调整观点。", dimension: "cognitive", reverse: false },
    { id: 2, text: "我愿意接触和了解与我文化背景差异很大的生活方式。", dimension: "cognitive", reverse: false },
    { id: 3, text: "我发现自己经常用同样的方式思考问题，很难跳出固有模式。", dimension: "cognitive", reverse: true },
    { id: 4, text: "即使面对复杂多变的情况，我也能灵活调整应对策略。", dimension: "cognitive", reverse: false },
    { id: 5, text: "当我情绪强烈时，我能清晰地识别自己在生气、悲伤还是恐惧。", dimension: "emotion", reverse: false },
    { id: 6, text: "即使遇到挫折，我也能较快地平复情绪，恢复正常状态。", dimension: "emotion", reverse: false },
    { id: 7, text: "我常常在冲动之下说出或做出让自己后悔的事。", dimension: "emotion", reverse: true },
    { id: 8, text: "我能接受负面情绪的存在，而不是急于消除或压抑它们。", dimension: "emotion", reverse: false },
    { id: 9, text: "即使短期内没有回报，我也会坚持做那些我承诺过的事情。", dimension: "responsibility", reverse: false },
    { id: 10, text: "我对自己的生活有清晰的长期规划，并持续为之努力。", dimension: "responsibility", reverse: false },
    { id: 11, text: "我有时会因为缺乏动力而放弃已经开始的计划。", dimension: "responsibility", reverse: true },
    { id: 12, text: "我会主动承担自己的错误，而不是找借口推脱。", dimension: "responsibility", reverse: false },
    { id: 13, text: "当周围人都持某种观点而我不同时，我能坦然表达而不感到焦虑。", dimension: "social", reverse: false },
    { id: 14, text: "即使没有社交活动，我也能享受独处时光。", dimension: "social", reverse: false },
    { id: 15, text: "我常常在意别人的看法，害怕被否定或拒绝。", dimension: "social", reverse: true },
    { id: 16, text: "我能建立清晰的人际边界，不被他人的情绪过度影响。", dimension: "social", reverse: false },
    { id: 17, text: "我觉得自己的生活有明确的方向感，不是随波逐流。", dimension: "meaning", reverse: false },
    { id: 18, text: "我有一套相对稳定的价值观，不容易被潮流裹挟。", dimension: "meaning", reverse: false },
    { id: 19, text: "我时常感到迷茫，不知道生活的意义是什么。", dimension: "meaning", reverse: true },
    { id: 20, text: "我相信自己所做的事情对他人或社会有价值。", dimension: "meaning", reverse: false },
    { id: 21, text: "我能接受自己有些方面永远无法做到优秀，这并不影响我对自己的认可。", dimension: "reality", reverse: false },
    { id: 22, text: "当现实不如预期时，我能调整期待而不是固执己见。", dimension: "reality", reverse: false },
    { id: 23, text: "我常常抱怨环境不公，觉得是外界阻碍了我的发展。", dimension: "reality", reverse: true },
    { id: 24, text: "我能与生活中的不确定性和不完美和平共处。", dimension: "reality", reverse: false }
];

const dimensions = {
    cognitive: { name: "认知弹性", lowAdvice: "尝试定期接触一个你反对的观点，并写出它的三个合理之处。跨领域学习也能有效提升认知弹性。" },
    emotion: { name: "情绪调节", lowAdvice: "练习情绪标注：当你感到情绪波动时，试着用精确的词语命名它。" },
    responsibility: { name: "责任整合", lowAdvice: "从小承诺开始：每天完成一件承诺的小事，建立说到做到的正向循环。" },
    social: { name: "社交自主", lowAdvice: "练习说不：从小事开始设立边界，你会发现拒绝并不会破坏真正的关系。" },
    meaning: { name: "意义感", lowAdvice: "尝试写下对我最重要的三件事，并检查日常行为是否与之一致。" },
    reality: { name: "现实接纳", lowAdvice: "练习区分可以改变的和需要接纳的，将精力投入前者。" }
};

const ageMapping = [
    { min: 0, max: 70, ageMin: 16, ageMax: 22, type: "探索型心灵", desc: "你的内心住着一个永远好奇的少年，对世界充满新鲜感。" },
    { min: 71, max: 90, ageMin: 23, ageMax: 30, type: "成长型心灵", desc: "你在探索与责任之间寻找平衡，正处于快速成长期。" },
    { min: 91, max: 110, ageMin: 31, ageMax: 40, type: "整合型心灵", desc: "你开始将经验内化为智慧，内心趋于稳定和自洽。" },
    { min: 111, max: 125, ageMin: 41, ageMax: 50, type: "通透型心灵", desc: "你看待问题更加全面，能接纳复杂性和矛盾。" },
    { min: 126, max: 140, ageMin: 51, ageMax: 65, type: "智慧型心灵", desc: "你的内心如智者般通透，拥有超越年龄的洞察力。" }
];

function generateResultData(totalScore, dimensionScores, actualAge) {
    let psychoAge = 30;
    let typeName = "";
    let typeDesc = "";
    for (const range of ageMapping) {
        if (totalScore >= range.min && totalScore <= range.max) {
            psychoAge = Math.round((range.ageMin + range.ageMax) / 2);
            typeName = range.type;
            typeDesc = range.desc;
            break;
        }
    }
    
    const deviation = psychoAge - actualAge;
    const deviationText = deviation >= 0 ? "成熟" + deviation + "岁" : "年轻" + (-deviation) + "岁";
    
    const strengths = [];
    for (const [key, data] of Object.entries(dimensionScores)) {
        if (data.score >= 22) {
            strengths.push(dimensions[key]?.name || key);
        }
    }
    if (strengths.length === 0) strengths.push("各项能力均衡发展");
    
    const suggestions = [];
    for (const [key, data] of Object.entries(dimensionScores)) {
        if (data.score <= 15) {
            suggestions.push({
                dimension: dimensions[key]?.name || key,
                advice: dimensions[key]?.lowAdvice || "多关注这方面的成长"
            });
        }
    }
    
    return {
        psychoAge: psychoAge,
        actualAge: actualAge,
        deviation: deviation,
        deviationText: deviationText,
        typeName: typeName,
        typeDesc: typeDesc,
        totalScore: totalScore,
        strengths: strengths,
        suggestions: suggestions,
        dimensionScores: dimensionScores
    };
}
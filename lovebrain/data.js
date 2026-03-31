// 恋爱认知模式评估 LCIA - 30题题库

const questions = [
    // 维度1: 理想化倾向 - 5题
    { id: 1, text: "即使对方有明显的缺点，我也会自动帮他找理由解释", dimension: "idealization", reverse: false },
    { id: 2, text: "我觉得我的伴侣（或喜欢的人）是世界上最完美的人", dimension: "idealization", reverse: false },
    { id: 3, text: "我会忽略朋友对伴侣的负面评价，觉得他们不了解他", dimension: "idealization", reverse: false },
    { id: 4, text: "当发现对方的缺点时，我会感到失望，但很快又忘记", dimension: "idealization", reverse: false },
    { id: 5, text: "我会把对方的小优点放大，觉得那是他与众不同的证据", dimension: "idealization", reverse: false },
    
    // 维度2: 依恋焦虑 - 5题
    { id: 6, text: "对方没及时回消息时，我会焦虑、胡思乱想", dimension: "anxiety", reverse: false },
    { id: 7, text: "我的情绪很大程度上取决于对方的态度", dimension: "anxiety", reverse: false },
    { id: 8, text: "和对方吵架后，我无法专心做任何事", dimension: "anxiety", reverse: false },
    { id: 9, text: "我会反复查看对方的社交媒体动态，分析他的心情", dimension: "anxiety", reverse: false },
    { id: 10, text: "对方心情不好时，我也会跟着低落，甚至更严重", dimension: "anxiety", reverse: false },
    
    // 维度3: 边界模糊 - 5题
    { id: 11, text: "为了维持关系，我可以放弃自己的原则和底线", dimension: "boundary", reverse: false },
    { id: 12, text: "我经常为了对方的需求，牺牲自己的时间和计划", dimension: "boundary", reverse: false },
    { id: 13, text: "即使对方做错事，我也会先道歉", dimension: "boundary", reverse: false },
    { id: 14, text: "我会为了迎合对方，改变自己的兴趣爱好", dimension: "boundary", reverse: false },
    { id: 15, text: "我很难对伴侣说不，即使心里不愿意", dimension: "boundary", reverse: false },
    
    // 维度4: 过度付出 - 5题
    { id: 16, text: "我愿意为对方付出一切，即使对方没要求", dimension: "overgiving", reverse: false },
    { id: 17, text: "我觉得爱一个人就要无条件付出", dimension: "overgiving", reverse: false },
    { id: 18, text: "我会因为对方的经济状况，主动承担更多开销", dimension: "overgiving", reverse: false },
    { id: 19, text: "即使很累，我也会满足对方的要求", dimension: "overgiving", reverse: false },
    { id: 20, text: "我会放弃自己的重要机会（如工作、学业），为了和对方在一起", dimension: "overgiving", reverse: false },
    
    // 维度5: 分离焦虑 - 5题
    { id: 21, text: "单身的时候，我会觉得自己不完整", dimension: "separation", reverse: false },
    { id: 22, text: "即使关系不健康，我也害怕分手", dimension: "separation", reverse: false },
    { id: 23, text: "我很难想象一个人生活", dimension: "separation", reverse: false },
    { id: 24, text: "分手后我会立刻寻找新的对象，无法忍受空窗期", dimension: "separation", reverse: false },
    { id: 25, text: "想到可能要分手，我会感到恐慌甚至身体不适", dimension: "separation", reverse: false },
    
    // 维度6: 纠缠执念 - 5题
    { id: 26, text: "分手后，我会反复回想和对方在一起的细节", dimension: "rumination", reverse: false },
    { id: 27, text: "我会忍不住查看前任的社交动态", dimension: "rumination", reverse: false },
    { id: 28, text: "分手后，我有过报复对方的想法", dimension: "rumination", reverse: false },
    { id: 29, text: "我很难接受不爱了这个事实，总觉得还有机会", dimension: "rumination", reverse: false },
    { id: 30, text: "即使已经分手很久，我还是无法开始新的感情", dimension: "rumination", reverse: false }
];

// 维度配置
const dimensions = {
    idealization: {
        name: "认知偏差：理想化倾向",
        nameShort: "理想化倾向",
        psychology: "理想化倾向在恋爱初期是正常现象，心理学称为积极错觉，适度的美化有助于关系满意度。但过度理想化会让人忽视危险信号，陷入不健康关系而不自知。",
        lowDesc: "你能客观看待伴侣的优点和缺点，不容易被热恋冲昏头脑。",
        highDesc: "你倾向于过度美化伴侣，容易忽略危险信号。",
        lowAdvice: "继续保持客观，恋爱中也要保持清醒。",
        highAdvice: "试着列出对方的缺点，每天看一遍；问问自己：如果朋友遇到这样的人，我会怎么劝她？"
    },
    anxiety: {
        name: "情绪调节：依恋焦虑",
        nameShort: "依恋焦虑",
        psychology: "依恋焦虑源于对伴侣可得性的过度警觉。焦虑型依恋者的大脑岛叶在等待伴侣回应时异常活跃，这与社交疼痛的神经机制相似。",
        lowDesc: "你的情绪相对独立，不容易被对方的态度左右。",
        highDesc: "你的情绪高度依赖对方的回应，容易陷入焦虑。",
        lowAdvice: "你的情绪独立性很好，继续保持。",
        highAdvice: "练习情绪标注：当焦虑时，说出具体的情绪名称；建立情绪安全网，列出3个让自己开心的事。"
    },
    boundary: {
        name: "自我分化：边界清晰度",
        nameShort: "边界清晰度",
        psychology: "Bowen的自我分化理论指出，低分化的人在关系中容易融合，分不清自己的感受和对方的感受，倾向于为对方的情绪负责。",
        lowDesc: "你能在关系中保持清晰的自我边界。",
        highDesc: "你容易在关系中失去自我边界，习惯性为对方妥协。",
        lowAdvice: "你的边界感很好，这是健康关系的基础。",
        highAdvice: "练习说不，从小事开始；写下我的底线是什么并温和地维护它。"
    },
    overgiving: {
        name: "关系模式：过度付出倾向",
        nameShort: "过度付出",
        psychology: "共依赖理论指出，过度付出者通过照顾他人获得价值感，但长期过度付出会导致怨恨积累，关系满意度反而更低。",
        lowDesc: "你能在付出和接收之间保持平衡。",
        highDesc: "你习惯性过度付出，容易让对方习以为常。",
        lowAdvice: "你的付出模式很健康。",
        highAdvice: "每次付出前问自己：对方要求了吗？我愿意吗？我会后悔吗？"
    },
    separation: {
        name: "分离焦虑：关系丧失恐惧",
        nameShort: "分离焦虑",
        psychology: "分离焦虑源于婴儿期对照顾者的依恋模式。单身恐惧研究发现，对单身状态的焦虑会让人即使在不健康的关系中也不愿离开。",
        lowDesc: "你能健康地独处，不依赖关系定义自我价值。",
        highDesc: "你害怕单身和分手，容易停留在不健康的关系中。",
        lowAdvice: "你的独处能力很好。",
        highAdvice: "练习独处：每周安排2小时完全独处；写下单身的好处清单。"
    },
    rumination: {
        name: "执念水平：反刍与未完成情结",
        nameShort: "执念水平",
        psychology: "反刍思维指反复沉浸于负面情绪和事件的思维模式。Zeigarnik效应指出，人们对未完成的事记忆更深，分手作为未完成的关系更难放下。",
        lowDesc: "你能较好地放下过去，向前看。",
        highDesc: "你容易陷入对过去关系的反复回想和执念。",
        lowAdvice: "你的放下能力很好。",
        highAdvice: "给自己设一个允许难过的期限；把想说的话写下来但不发送；寻求朋友或专业人士的支持。"
    }
};

// 结果类型映射
const resultTypes = [
    { min: 30, max: 50, type: "安全自主型", tag: "恋爱认知健康", desc: "你能在关系中保持自我，情绪相对独立，认知客观。这是最健康的恋爱认知模式。" },
    { min: 51, max: 75, type: "情境依赖型", tag: "轻度倾向", desc: "你大部分时间清醒，但遇到特定情境或心动的人时容易上头。" },
    { min: 76, max: 100, type: "焦虑矛盾型", tag: "中度倾向", desc: "你在关系中容易焦虑，情绪受对方影响较大，需要更多安全感。" },
    { min: 101, max: 120, type: "过度卷入型", tag: "重度倾向", desc: "你已经为爱失去自我，容易陷入不健康的关系模式，需要主动调整。" },
    { min: 121, max: 135, type: "共依赖倾向型", tag: "晚期", desc: "你可能陷入了共依赖的关系模式，强烈建议进行自我觉察和调整。" },
    { min: 136, max: 150, type: "病态依恋型", tag: "建议专业干预", desc: "你的恋爱模式已经影响到正常生活，建议寻求专业心理咨询的帮助。" }
];

function getResultType(totalScore) {
    for (const type of resultTypes) {
        if (totalScore >= type.min && totalScore <= type.max) {
            return type;
        }
    }
    return resultTypes[0];
}

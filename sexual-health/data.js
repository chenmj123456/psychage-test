// 性健康认知评估 SHCA - 25题题库
// 5个维度 × 5题

const questions = [
    // 维度1: 身体觉知 (Body Awareness) - 5题
    { id: 1, text: "我很少关注自己身体的感觉和需求", dimension: "body", reverse: false },
    { id: 2, text: "我对自己的身体感到陌生或不自在", dimension: "body", reverse: false },
    { id: 3, text: "我能够清晰地感知自己是否想要亲密接触", dimension: "body", reverse: true },
    { id: 4, text: "我会刻意回避思考与性有关的事", dimension: "body", reverse: false },
    { id: 5, text: "当我产生性感受时，我能自然地接纳它", dimension: "body", reverse: true },
    
    // 维度2: 情感表达 (Emotional Expression) - 5题
    { id: 6, text: "我很难开口告诉伴侣我想要什么", dimension: "expression", reverse: false },
    { id: 7, text: "我害怕表达性需求会被拒绝或嘲笑", dimension: "expression", reverse: false },
    { id: 8, text: "我能和伴侣坦诚讨论亲密关系中的感受", dimension: "expression", reverse: true },
    { id: 9, text: "我会因为羞耻而压抑自己的真实想法", dimension: "expression", reverse: false },
    { id: 10, text: "我觉得'说出来'比'憋在心里'更好", dimension: "expression", reverse: true },
    
    // 维度3: 关系安全感 (Relationship Security) - 5题
    { id: 11, text: "我担心伴侣会评判我的身体或表现", dimension: "security", reverse: false },
    { id: 12, text: "在亲密关系中，我感到放松和被接纳", dimension: "security", reverse: true },
    { id: 13, text: "我害怕被拒绝，所以不敢主动", dimension: "security", reverse: false },
    { id: 14, text: "我觉得伴侣是值得信任的", dimension: "security", reverse: true },
    { id: 15, text: "我会因为过去的负面经历而对亲密关系感到恐惧", dimension: "security", reverse: false },
    
    // 维度4: 社会压力 (Social Pressure) - 5题
    { id: 16, text: "我觉得谈论性是不礼貌或羞耻的", dimension: "pressure", reverse: false },
    { id: 17, text: "我受传统文化影响，认为性不该被讨论", dimension: "pressure", reverse: false },
    { id: 18, text: "我认为性是私密的，这让我感到压抑", dimension: "pressure", reverse: false },
    { id: 19, text: "我能坦然接受自己是一个有性需求的人", dimension: "pressure", reverse: true },
    { id: 20, text: "社会对性的看法影响了我对自己的接纳", dimension: "pressure", reverse: false },
    
    // 维度5: 自我接纳 (Self-Acceptance) - 5题
    { id: 21, text: "我因为自己的性欲望而感到内疚", dimension: "acceptance", reverse: false },
    { id: 22, text: "我接纳自己所有的感受，包括性感受", dimension: "acceptance", reverse: true },
    { id: 23, text: "我觉得自己'不正常'", dimension: "acceptance", reverse: false },
    { id: 24, text: "我希望自己能更自由地表达性", dimension: "acceptance", reverse: false },
    { id: 25, text: "我对自己在亲密关系中的表现感到满意", dimension: "acceptance", reverse: true }
];

// 维度配置
const dimensions = {
    body: {
        name: "身体觉知",
        nameFull: "身体觉知与感受连接",
        psychology: "身体觉知是性健康的基石。研究发现，对身体感受更敏锐的人，在亲密关系中满意度更高，也更容易获得愉悦体验。压抑身体感受会导致身心分离，长期可能影响整体幸福感。",
        lowDesc: "你对自己的身体感受很敏锐，能够觉察和接纳身体的信号。这是身心健康的重要基础。",
        highDesc: "你可能习惯了忽略或压抑身体的感觉。长期的身心分离会影响整体幸福感。",
        lowAdvice: "你对身体的感知力很好，继续保持。可以尝试正念身体扫描练习，深化这种连接。",
        highAdvice: "建议从每天5分钟的身体扫描开始：闭上眼睛，从脚到头感受身体的每一个部位，不做评判，只是觉察。"
    },
    expression: {
        name: "情感表达",
        nameFull: "性需求与情感表达",
        psychology: "表达性需求的能力与沟通技巧和自我价值感相关。研究发现，能够坦诚表达需求的人在亲密关系中满意度更高，伴侣关系也更稳定。",
        lowDesc: "你能够表达自己的需求和感受，这是健康关系的重要能力。",
        highDesc: "你害怕表达需求，可能源于过去的拒绝经历或内在的羞耻感。",
        lowAdvice: "你的表达能力很好，继续保持坦诚沟通。",
        highAdvice: "从'我句式'开始练习：'当___时，我感到___，我希望___'。先在小事上练习，逐步建立信心。"
    },
    security: {
        name: "关系安全感",
        nameFull: "亲密关系中的安全感",
        psychology: "关系安全感基于依恋理论。安全型依恋的人在亲密关系中更放松、更信任伴侣；而不安全依恋则可能导致压抑和回避。",
        lowDesc: "你在亲密关系中感到安全和被接纳，这是良好关系的基础。",
        highDesc: "你可能对关系缺乏安全感，担心被评判或拒绝。",
        lowAdvice: "你的关系安全感很好，这是你能够自由表达的重要基础。",
        highAdvice: "先和自己建立安全关系：每天对自己说'我值得被好好对待'。观察哪些人让你感到安全，多和他们相处。"
    },
    pressure: {
        name: "社会压力",
        nameFull: "社会文化压力感知",
        psychology: "社会文化对性的态度会内化为个体的'性脚本'。研究发现，接受过全面性教育的人，性压抑水平显著更低。你的感受是正常的，你不是一个人。",
        lowDesc: "你能相对独立地看待社会文化对性的态度，不容易被外界观念束缚。",
        highDesc: "你深受社会文化观念影响，可能因此感到压抑或内疚。",
        lowAdvice: "你的独立性很好，可以继续探索和学习，深化自己的理解。",
        highAdvice: "阅读《亲密关系》《性的解析》等书籍，了解性在不同文化中的多样性。记住：你的感受是正常的。"
    },
    acceptance: {
        name: "自我接纳",
        nameFull: "性自我接纳",
        psychology: "自我接纳是心理健康的核心。能够接纳自己性感受的人，整体幸福感和生活满意度更高，也更容易建立健康的亲密关系。",
        lowDesc: "你能接纳自己的全部，包括性感受。这是心理健康的重要标志。",
        highDesc: "你可能对自己有较多评判和苛责，难以接纳真实的自己。",
        lowAdvice: "你的自我接纳度很高，这是非常宝贵的心理资源。",
        highAdvice: "练习自我关怀：想象你最好的朋友遇到同样情况，你会怎么安慰她？然后用同样的话对自己说。"
    }
};

// 结果类型映射（总分125分）
const resultTypes = [
    { min: 25, max: 45, type: "自由型", tag: "性认知健康", desc: "你能自然地接纳和表达自己的性感受，身心整合度较高。这是最健康的性认知模式。" },
    { min: 46, max: 65, type: "探索型", tag: "轻度压抑", desc: "你大部分时间自由，但某些方面还在探索和成长中。这是很多人都会经历的阶段。" },
    { min: 66, max: 85, type: "受限型", tag: "中度压抑", desc: "你的性表达受到较多限制，内心有冲突，需要觉察和调整。" },
    { min: 86, max: 105, type: "压抑型", tag: "重度压抑", desc: "你长期压抑自己，可能伴随内疚或羞耻感。建议开始自我关怀和成长。" },
    { min: 106, max: 125, type: "困顿型", tag: "建议专业支持", desc: "你可能被强烈的负面感受困扰，建议寻求专业心理咨询的帮助。" }
];

function getResultType(totalScore) {
    for (const type of resultTypes) {
        if (totalScore >= type.min && totalScore <= type.max) {
            return type;
        }
    }
    return resultTypes[0];
}

// 书籍推荐函数（结果页使用）
function getBookRecommendations(scores) {
    var recommendations = [];
    
    var bookOptions = [
        { dim: "body", score: scores.body, threshold: 15, title: "《身体知道答案》", author: "武志红", reason: "重新连接身体感受，学会倾听身体的信号", dimName: "身体觉知" },
        { dim: "expression", score: scores.expression, threshold: 15, title: "《非暴力沟通》", author: "马歇尔·卢森堡", reason: "学会表达需求和感受，建立有效沟通", dimName: "情感表达" },
        { dim: "security", score: scores.security, threshold: 15, title: "《关系的重建》", author: "阿米尔·莱文", reason: "理解依恋风格，建立关系安全感", dimName: "关系安全感" },
        { dim: "pressure", score: scores.pressure, threshold: 15, title: "《亲密关系》", author: "罗兰·米勒", reason: "科学认识亲密关系，减少社会压力影响", dimName: "社会压力" },
        { dim: "acceptance", score: scores.acceptance, threshold: 15, title: "《接纳》", author: "塔拉·布莱克", reason: "学会与不完美的自己相处", dimName: "自我接纳" }
    ];
    
    for (var i = 0; i < bookOptions.length; i++) {
        var book = bookOptions[i];
        if (book.score >= book.threshold) {
            recommendations.push({
                title: book.title,
                author: book.author,
                reason: book.reason,
                dimension: book.dimName,
                score: book.score
            });
        }
    }
    
    recommendations.sort(function(a, b) {
        return b.score - a.score;
    });
    
    if (recommendations.length === 0) {
        return [{
            title: "《亲密关系》",
            author: "罗兰·米勒",
            reason: "经典心理学著作，帮你理解亲密关系的本质",
            dimension: "通用推荐"
        }];
    }
    
    return recommendations.slice(0, 3);
}
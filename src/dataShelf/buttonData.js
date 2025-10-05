const baseClass =
    "py-2.5 me-2 mb-2 flex-1 min-w-[140px] text-sm rounded-2xl border border-transparent ";

export default [
    {
        id: 1,
        emotion: "Happy",
        emoticon: "( ╹ ꇴ╹)",
        colorClass: baseClass + "bg-amber-200 hover:bg-amber-500 hover:shadow-[0px_15px_20px_rgba(253,230,138,0.8)]",
    },
    {
        id: 2,
        emotion: "Sad",
        emoticon: "(╥﹏╥)",
        colorClass: baseClass + "bg-blue-200 hover:bg-blue-800 hover:shadow-[0px_15px_20px_rgba(191,219,254,1)]",
    },
    {
        id: 3,
        emotion: "Angry",
        emoticon: "( ᗒᗣᗕ )",
        colorClass: baseClass + "bg-red-400 hover:bg-red-600 hover:shadow-[0px_15px_20px_rgba(252,165,165,1)]",
    },
    {
        id: 4,
        emotion: "Anxious",
        emoticon: "(•́ ᴖ •̀ )",
        colorClass: baseClass + "bg-purple-200 hover:bg-purple-700 hover:shadow-[0px_15px_20px_rgba(196,181,253,1)]",
    },
    {
        id: 5,
        emotion: "Excited",
        emoticon: "( >ᗜ<)",
        colorClass: baseClass + "bg-green-200 hover:bg-green-700 hover:shadow-[0px_15px_20px_rgba(167,243,208,1)]",
    },
];

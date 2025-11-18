



export type ColorConfiguration = keyof typeof colorConfigurations;






export const colorConfigurations = {


	default: {
		gradient: [
			"hsl(240deg 100% 20%)",
			"hsl(281deg 100% 21%)",
			"hsl(304deg 100% 23%)",
			"hsl(319deg 100% 30%)",
			"hsl(329deg 100% 36%)",
			"hsl(336deg 100% 41%)",
			"hsl(346deg 83% 51%)",
			"hsl(3deg 95% 61%)",
			"hsl(17deg 100% 59%)",
			"hsl(30deg 100% 55%)",
			"hsl(40deg 100% 50%)",
			"hsl(48deg 100% 50%)",
			"hsl(55deg 100% 50%)",
		],
	},


	black_white: {
		gradient: [
			"hsl(0deg 0% 0%)", 
			"hsl(0deg 0% 100%)"
		],
	},


	orange: {
		gradient: [
			"hsl(345deg 100% 37%)",
			"hsl(1deg 67% 48%)",
			"hsl(13deg 75% 48%)",
			"hsl(23deg 86% 47%)",
			"hsl(31deg 100% 45%)",
			"hsl(36deg 100% 46%)",
			"hsl(42deg 100% 46%)",
			"hsl(49deg 100% 45%)",
			"hsl(56deg 100% 44%)",
			"hsl(64deg 84% 50%)",
			"hsl(75deg 100% 61%)",
		],
	},


	green: {
		gradient: [
			"hsl(170deg 31% 19%)",
			"hsl(163deg 48% 24%)",
			"hsl(152deg 49% 30%)",
			"hsl(133deg 38% 40%)",
			"hsl(105deg 39% 47%)",
			"hsl(83deg 52% 49%)",
			"hsl(68deg 68% 49%)",
			"hsl(56deg 100% 48%)",
			"hsl(54deg 95% 63%)",
			"hsl(53deg 99% 71%)",
			"hsl(52deg 100% 77%)",
		],
	},


	pastel: {
		gradient: [
			"hsl(141 75% 72%)", 
			"hsl(41 90% 62%)", 
			"hsl(358 64% 50%)"
		],
	},


	blue_to_yellow: {
		gradient: [
			"hsl(204deg 100% 22%)",
			"hsl(199deg 100% 29%)",
			"hsl(189deg 100% 32%)",
			"hsl(173deg 100% 33%)",
			"hsl(154deg 100% 39%)",
			"hsl( 89deg  70% 56%)",
			"hsl( 55deg 100% 50%)",
		],
	},




	gradient_1: {
		gradient: [
			"hsl(187deg 63% 34%)",
			"hsl(183deg 51% 37%)",
			"hsl(176deg 41% 41%)",
			"hsl(168deg 32% 46%)",
			"hsl(157deg 26% 51%)",
			"hsl(141deg 24% 56%)",
			"hsl(118deg 21% 61%)",
			"hsl( 94deg 25% 62%)",
			"hsl( 75deg 28% 64%)",
			"hsl( 58deg 32% 66%)",
			"hsl( 46deg 47% 71%)",
			"hsl( 37deg 68% 77%)",
			"hsl( 30deg 100% 83%)",
		],
	},

	gradient_2: {
		gradient: [
			"hsl(187deg 63% 34%)",
			"hsl(183deg 51% 37%)",
			"hsl(176deg 41% 41%)",
			"hsl(168deg 32% 46%)",
			"hsl(157deg 26% 51%)",
			"hsl(141deg 24% 56%)",
			"hsl(118deg 21% 61%)",
			"hsl( 94deg 25% 62%)",
			"hsl( 75deg 28% 64%)",
			"hsl( 58deg 32% 66%)",
			"hsl( 46deg 47% 71%)",
			"hsl( 37deg 68% 77%)",
			"hsl( 30deg 100% 83%)"
		],
	},

	gradient_3: {
		gradient: [
			"hsl(187deg 63% 34%)",
			"hsl(183deg 51% 37%)",
			"hsl(176deg 41% 41%)",
			"hsl(168deg 32% 46%)",
			"hsl(157deg 26% 51%)",
			"hsl(141deg 24% 56%)",
			"hsl(118deg 21% 61%)",
			"hsl( 94deg 25% 62%)",
			"hsl( 75deg 28% 64%)",
			"hsl( 58deg 32% 66%)",
			"hsl( 46deg 47% 71%)",
			"hsl( 37deg 68% 77%)",
			"hsl( 30deg 100% 83%)"
		],
	},

	gradient_4: {
		gradient: [
			"hsl(187deg 63% 34%)",
			"hsl(187deg 64% 35%)",
			"hsl(187deg 65% 36%)",
			"hsl(187deg 66% 37%)",
			"hsl(187deg 66% 38%)",
			"hsl(187deg 67% 39%)",
			"hsl(187deg 68% 40%)",
			"hsl(187deg 69% 41%)",
			"hsl(187deg 70% 42%)",
			"hsl(187deg 71% 43%)",
			"hsl(187deg 72% 44%)",
			"hsl(187deg 73% 45%)",
			"hsl(187deg 74% 46%)"
		],
	},

	gradient_5: {
		gradient: [
			"hsl(187deg 63% 34%)",
			"hsl(183deg 51% 37%)",
			"hsl(176deg 41% 41%)",
			"hsl(168deg 32% 46%)",
			"hsl(157deg 26% 51%)",
			"hsl(141deg 24% 56%)",
			"hsl(118deg 21% 61%)",
			"hsl( 94deg 25% 62%)",
			"hsl( 75deg 28% 64%)",
			"hsl( 58deg 32% 66%)",
			"hsl( 46deg 47% 71%)",
			"hsl( 37deg 68% 77%)",
			"hsl( 30deg 100% 83%)"
		],
	},

	gradient_6: {
		gradient: [
			"hsl(191deg 51% 15%)",
			"hsl(190deg 53% 18%)",
			"hsl(190deg 55% 21%)",
			"hsl(190deg 57% 23%)",
			"hsl(189deg 59% 26%)",
			"hsl(189deg 61% 28%)",
			"hsl(189deg 63% 31%)",
			"hsl(188deg 64% 34%)",
			"hsl(188deg 66% 36%)",
			"hsl(188deg 68% 39%)",
			"hsl(188deg 70% 41%)",
			"hsl(187deg 72% 44%)",
			"hsl(187deg 74% 46%)"
		],
	},

	gradient_7: {
		gradient: [
			"hsl(13deg 75% 48%)",
			"hsl(18deg 78% 48%)",
			"hsl(22deg 82% 48%)",
			"hsl(26deg 86% 48%)",
			"hsl(29deg 91% 47%)",
			"hsl(33deg 96% 46%)",
			"hsl(36deg 100% 46%)",
			"hsl(38deg 100% 46%)",
			"hsl(40deg 100% 46%)",
			"hsl(42deg 100% 46%)",
			"hsl(44deg 100% 45%)",
			"hsl(47deg 100% 45%)",
			"hsl(49deg 100% 45%)"
		],
	},

	gradient_8: {
		gradient: [
			"hsl(187deg 74% 46%)",
			"hsl(183deg 59% 48%)",
			"hsl(177deg 50% 52%)",
			"hsl(169deg 47% 57%)",
			"hsl(158deg 44% 62%)",
			"hsl(143deg 40% 66%)",
			"hsl(120deg 34% 71%)",
			"hsl( 95deg 37% 70%)",
			"hsl( 76deg 39% 70%)",
			"hsl( 59deg 40% 70%)",
			"hsl( 46deg 56% 74%)",
			"hsl( 37deg 75% 78%)",
			"hsl( 30deg 100% 83%)"
		],
	},

	gradient_9: {
		gradient: [
			"hsl( 16deg 76% 49%)",
			"hsl( 23deg 79% 49%)",
			"hsl( 29deg 79% 50%)",
			"hsl( 34deg 80% 51%)",
			"hsl( 39deg 80% 53%)",
			"hsl( 13deg 65% 57%)",
			"hsl(345deg 40% 47%)",
			"hsl(312deg 28% 30%)",
			"hsl(249deg 20% 18%)",
			"hsl(299deg 27% 24%)",
			"hsl(332deg 44% 34%)",
			"hsl(353deg 49% 44%)",
			"hsl( 17deg 65% 46%)"
		],
	}, // #DA511E, #E7A226, #282538, #C05329

	gradient_10: {
		gradient: [
			"hsl(16deg 76% 49%)",
			"hsl(21deg 78% 49%)",
			"hsl(25deg 79% 49%)",
			"hsl(29deg 79% 50%)",
			"hsl(32deg 79% 50%)",
			"hsl(36deg 80% 51%)",
			"hsl(39deg 80% 53%)",
			"hsl(35deg 77% 52%)",
			"hsl(32deg 73% 51%)",
			"hsl(28deg 70% 50%)",
			"hsl(25deg 69% 48%)",
			"hsl(21deg 67% 47%)",
			"hsl(17deg 65% 46%)"
		],
	},

	gradient_11: {
		gradient: [
			"hsl(16deg 76% 49%)",
			"hsl(21deg 78% 49%)",
			"hsl(25deg 79% 49%)",
			"hsl(29deg 79% 50%)",
			"hsl(32deg 79% 50%)",
			"hsl(36deg 80% 51%)",
			"hsl(39deg 80% 53%)",
			"hsl(35deg 77% 52%)",
			"hsl(32deg 73% 51%)",
			"hsl(28deg 70% 50%)",
			"hsl(25deg 69% 48%)",
			"hsl(21deg 67% 47%)",
			"hsl(17deg 65% 46%)"
		],
	},



	gradient_12: {
    	gradient: [
			"hsl(187deg 100% 30%)",  // Deep cyan
			"hsl(168deg 85% 40%)",   // Teal
			"hsl(141deg 75% 50%)",   // Green
			"hsl(75deg 90% 55%)",    // Yellow-green
			"hsl(46deg 100% 60%)",   // Gold
			"hsl(30deg 100% 65%)",   // Orange
		]
	},




	gradient_13: {
		gradient: [
			"hsl(220deg 85% 35%)",   // Deep luminous indigo (mountains)
			"hsl(215deg 75% 42%)",   // Lighter sapphire transition
			"hsl(355deg 85% 48%)",   // Glowing crimson (sunset boundary)
			"hsl(15deg 90% 52%)",    // Vibrant coral
			"hsl(28deg 95% 56%)",    // Rich amber
			"hsl(38deg 100% 58%)",   // Molten gold (sun)
			"hsl(45deg 100% 62%)",   // Bright golden yellow
		]
	}, 





	gradient_14: {
		gradient: [
			"hsl(270deg 85% 45%)",   // Rich purple
			"hsl(290deg 90% 50%)",   // Purple-magenta
			"hsl(320deg 95% 55%)",   // Hot magenta
			"hsl(340deg 95% 60%)",   // Rose pink
			"hsl(10deg 95% 62%)",    // Coral
			"hsl(25deg 100% 64%)",   // Warm orange
			"hsl(40deg 100% 66%)",   // Golden orange
		]
	}, 





	gradient_15: {
		gradient: [
			"hsl( 16deg 76% 49%)",
			"hsl( 30deg 100% 40%)",
			"hsl( 39deg 100% 36%)",
			"hsl( 48deg 100% 32%)",
			"hsl( 60deg 90% 30%)",
			"hsl( 76deg 58% 38%)",
			"hsl( 98deg 41% 45%)",
			"hsl(131deg 37% 48%)",
			"hsl(155deg 56% 44%)",
			"hsl(169deg 100% 35%)",
			"hsl(176deg 100% 35%)",
			"hsl(182deg 100% 37%)",
			"hsl(187deg 74% 46%)"
		]
	},






	gradient_16: {
		gradient: [
			"hsl(270deg 100% 7%)",
			"hsl(259deg 100% 13%)",
			"hsl(248deg 100% 19%)",
			"hsl(237deg 100% 25%)",
			"hsl(226deg 100% 30%)",
			"hsl(215deg 100% 36%)",
			"hsl(203deg 100% 42%)",
			"hsl(192deg 100% 48%)",
			"hsl(181deg 100% 54%)",
			"hsl(170deg 100% 60%)",
			"hsl(159deg 100% 66%)",
			"hsl(148deg 100% 72%)",
			"hsl(137deg 100% 77%)",
			"hsl(126deg 100% 83%)",
			"hsl(115deg 100% 89%)",
			"hsl(104deg 100% 95%)"
		]
	},



	gradient_17: {
		gradient: [
			"hsl(315deg 73% 10%)",
			"hsl(346deg 63% 21%)",
			"hsl(360deg 59% 32%)",
			"hsl(  8deg 72% 40%)",
			"hsl( 14deg 85% 48%)",
			"hsl( 20deg 97% 53%)",
			"hsl( 26deg 100% 58%)",
			"hsl( 33deg 100% 62%)",
			"hsl( 41deg 100% 66%)",
			"hsl( 50deg 100% 70%)"
		]
	},



	gradient_18: {
		gradient: [
			"hsl(  0deg 0% 100%)",
			"hsl( 58deg 100% 95%)",
			"hsl( 57deg 100% 89%)",
			"hsl( 57deg 100% 84%)",
			"hsl( 57deg 100% 78%)",
			"hsl( 57deg 100% 73%)",
			"hsl( 57deg 100% 67%)",
			"hsl( 57deg 100% 62%)",
			"hsl( 71deg 97% 58%)",
			"hsl( 92deg 94% 54%)",
			"hsl(113deg 90% 51%)",
			"hsl(133deg 87% 47%)",
			"hsl(154deg 84% 44%)",
			"hsl(175deg 80% 41%)",
			"hsl(196deg 77% 37%)",
			"hsl(211deg 72% 34%)",
			"hsl(217deg 64% 30%)",
			"hsl(222deg 56% 27%)",
			"hsl(227deg 49% 23%)",
			"hsl(233deg 40% 20%)",
			"hsl(238deg 32% 16%)",
			"hsl(244deg 25% 13%)",
			"hsl(248deg 17% 9%)"
		]
	},



	gradient_19: {
		gradient: [
			"hsl(345deg 100% 42%)",
			"hsl( 34deg 58% 51%)",
			"hsl( 63deg 55% 51%)",
			"hsl( 84deg 60% 60%)",
			"hsl(132deg 41% 62%)",
			"hsl(175deg 100% 35%)",
			"hsl(191deg 86% 35%)",
			"hsl(214deg 81% 37%)",
			"hsl(235deg 78% 34%)",
			"hsl(238deg 73% 26%)",
			"hsl(267deg 100% 7%)"
		]
	},




	gradient_20: {
		gradient: [
			"hsl( 49deg 100% 69%)",
			"hsl( 37deg 99% 65%)",
			"hsl( 26deg 91% 63%)",
			"hsl( 13deg 77% 60%)",
			"hsl(357deg 60% 56%)",
			"hsl(341deg 64% 43%)",
			"hsl(324deg 95% 29%)",
			"hsl(309deg 100% 20%)",
			"hsl(280deg 100% 16%)",
			"hsl(237deg 78% 19%)",
			"hsl(220deg 100% 21%)",
			"hsl(214deg 100% 24%)",
			"hsl(208deg 100% 27%)",
			"hsl(203deg 100% 29%)",
			"hsl(198deg 100% 30%)",
			"hsl(193deg 100% 31%)",
			"hsl(188deg 100% 32%)",
			"hsl(183deg 79% 36%)"
		]
	},



	gradient_21: {
		gradient: [
			"hsl(315deg 73% 10%)",
			"hsl(351deg 62% 24%)",
			"hsl(  5deg 66% 37%)",
			"hsl( 13deg 83% 47%)",
			"hsl( 21deg 98% 54%)",
			"hsl( 29deg 100% 60%)",
			"hsl( 38deg 100% 65%)",
			"hsl( 50deg 100% 70%)"
		]
	},



	gradient_22: {
		gradient: [
			"hsl(  0deg 100% 49%)",
			"hsl(  7deg 100% 55%)",
			"hsl( 14deg 100% 60%)",
			"hsl( 21deg 100% 66%)",
			"hsl( 29deg 100% 71%)",
			"hsl( 36deg 100% 77%)",
			"hsl( 43deg 100% 83%)",
			"hsl( 50deg 100% 88%)",
			"hsl( 51deg 100% 86%)",
			"hsl( 48deg 100% 81%)",
			"hsl( 45deg 100% 75%)",
			"hsl( 42deg 100% 70%)",
			"hsl( 38deg 100% 65%)",
			"hsl( 35deg 100% 59%)",
			"hsl( 32deg 100% 54%)",
			"hsl( 27deg 98% 49%)",
			"hsl( 19deg 93% 45%)",
			"hsl( 10deg 87% 40%)",
			"hsl(  1deg 82% 36%)",
			"hsl(353deg 77% 32%)",
			"hsl(344deg 72% 28%)",
			"hsl(336deg 66% 24%)",
			"hsl(327deg 61% 20%)"
		]
	},




	gradient_23: {
		gradient: [
			"hsl(315deg 73% 10%)",
			"hsl(320deg 77% 13%)",
			"hsl(324deg 83% 17%)",
			"hsl(328deg 90% 20%)",
			"hsl(330deg 97% 23%)",
			"hsl(333deg 100% 27%)",
			"hsl(337deg 100% 30%)",
			"hsl(340deg 98% 34%)",
			"hsl(346deg 87% 40%)",
			"hsl(353deg 76% 46%)",
			"hsl(  0deg 74% 52%)",
			"hsl(  8deg 85% 52%)",
			"hsl( 17deg 95% 50%)",
			"hsl( 22deg 99% 49%)",
			"hsl( 26deg 100% 49%)",
			"hsl( 29deg 100% 50%)",
			"hsl( 32deg 99% 51%)",
			"hsl( 33deg 99% 53%)",
			"hsl( 35deg 99% 55%)",
			"hsl( 38deg 100% 58%)",
			"hsl( 40deg 100% 60%)",
			"hsl( 42deg 100% 62%)",
			"hsl( 44deg 100% 65%)",
			"hsl( 47deg 100% 67%)",
			"hsl( 50deg 100% 70%)"
		]
	},








};








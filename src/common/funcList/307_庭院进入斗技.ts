import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const normal = -1; //定义常量
const left = 0;
const center = 1;
const right = 2;

export class Func307 implements IFuncOrigin {
	id = 307;
	name = '庭院进入斗技界面';
	desc = '从庭院进入斗技界面';
	operator: IFuncOperatorOrigin[] = [
		{
			desc:   // 页面是否为庭院(菜单未展开) 只支持默认庭院皮肤与默认装饰
			[1280, 720,
				[[right, 1226, 47, 0xcda47a],
					[right, 1157, 45, 0xb39671],
					[center, 389, 65, 0xfbc573],
					[right, 1207, 637, 0xdfd1cb]]
			],
			oper: [
				[left, 1280, 720, 0, 0, 20, 20, 1000]
			]
		},
		{
			desc:   // 页面是否为庭院(菜单已展开) 只支持默认庭院皮肤与默认装饰
			[1280, 720,
				[[right, 1226, 47, 0xcda47a],
					[right, 1157, 45, 0xb29670],
					[center, 389, 65, 0xfbc573],
					[right, 1228, 646, 0xd6c6c3]]
			]
		},
		{
			desc: 	//	// 页面是否为庭院(菜单已展开)另一种图标 御祝图标 只支持默认庭院皮肤与默认装饰
			[1280, 720,
				[
					[right, 1223, 662, 0xdbcbc7],
					[right, 1155, 41, 0xd7b188],
					[center, 451, 631, 0xe8e4e1],
					[center, 673, 651, 0xdb8b3f],
				]
			],
		}, {
			// 庭院已打开菜单，另另外一种图标
			desc: [
				1280, 720,
				[
					[right, 1223, 658, 0xdac9c4],
					[right, 1155, 41, 0xd6b187],
					[center, 451, 631, 0xe6e3e1],
					[center, 683, 657, 0xda6b29],
				]
			],
			oper: [
				[left, 1280, 720, 427, 619, 486, 683, 1000]
			]
		},
		{	// 检测_町中
			desc:
				[
					1280, 720,
					[
						[right, 1053, 441, 0x8c8888],
						[right, 1096, 229, 0xa8a196],
						[right, 1040, 239, 0xb6b0bb],
						[right, 1220, 48, 0xcba375],
						[right, 1155, 38, 0xd7b28a],
					]
				],
			oper: [
				[center, 1280, 720, 757,149, 799,198, 1200]	//	点击斗技灯笼
			]
		}
	];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {

		if (thisScript.oper({
			name: '庭院判断',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[1].desc
			}, {
				desc: thisOperator[2].desc
			}, {
				desc: thisOperator[3].desc
			}]
		})) {
			let point = thisScript.findMultiColor('庭院_町中竖牌');
			if (point) {
				let oper = [
					[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
				];
				thisScript.regionClick(oper);
				sleep(2000);
				return true;
			}
		}

		// let point = thisScript.findMultiColor('町中_斗技灯笼');
		// if (point) {
		// 	let oper = [
		// 		[point.x, point.y, point.x + thisOperator[0].oper[0][2], point.y + thisOperator[0].oper[0][3], thisOperator[0].oper[0][4]]
		// 	];
		// 	thisScript.regionClick(oper);
		// 	sleep(2000);

		// 	return false;
		// }

		if (thisScript.oper({
			name: '町中_斗技灯笼',
			operator: [thisOperator[4]]
		})) {
			return true;
		}

		return false;
	}
}
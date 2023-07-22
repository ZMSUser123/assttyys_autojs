import { IFuncOrigin, IFuncOperatorOrigin, IFuncOperator } from '@/interface/IFunc';
import { Script } from '@/system/script';
const left = 0;
const center = 1;
const right = 2;
let swiper = 0, scroll = true

export class Func037 implements IFuncOrigin {
	id = 37;
	name = '金币妖怪_进入组队';
	desc = '从庭院进入金币妖怪组队界面';
	operator: IFuncOperatorOrigin[] = [{
		desc: [1280, 720,
			[
				[left, 52, 28, 0xf0d08d],
				[left, 106, 32, 0xf5f0de],
				[left, 126, 51, 0xefead7],
				[left, 169, 40, 0x09090a],
				[left, 56, 60, 0xc4a97c],
				[right, 1221, 87, 0x754824],
				[right, 1224, 621, 0x381f1c],
				[right, 1219, 324, 0x3c2923],
				[left, 138, 31, 0xc5bfae]
			]
		],
		oper: [
			[center, 1280, 720, 171, 350, 326, 383, 1],
			[center, 1280, 720, 165, 258, 338, 304, 1]
		]
	}, {
		// 旧
		desc: [1280, 720,
			[
				[left, 52, 28, 0xf0d08d],
				[left, 106, 32, 0xf5f0de],
				[left, 126, 51, 0xefead7],
				[left, 169, 40, 0x09090a],
				[left, 56, 60, 0xc4a97c],
				[right, 1221, 87, 0x754824],
				[right, 1224, 621, 0x381f1c],
				[right, 1219, 324, 0x3c2923],
				[left, 138, 31, 0xc5bfae]
			]
		],
	}];
	operatorFunc(thisScript: Script, thisOperator: IFuncOperator[]): boolean {
		if (thisScript.oper({
			id: 36,
			name: '金币妖怪_进入组队',
			operator: [{
				desc: thisOperator[0].desc
			}, {
				desc: thisOperator[1].desc
			}]
		})) {
			let point = thisScript.findMultiColor('金币妖怪_金币妖怪字样') || null;
			if (!point) {
				thisScript.regionSwipe(thisOperator[0].oper[scroll ? 0 : 1], thisOperator[0].oper[scroll ? 1 : 0], [100, 300], 0, 3000);
				swiper++
				if (swiper >= 6) {
					swiper = 0
					scroll = !scroll
				}
				return true;
			} else if (point) {
				let oper = [
					[point.x, point.y, point.x + 10, point.y + 10, 1000]
				];
				thisScript.regionClick(oper);
				return true
			} else {
				return false
			}
		}
	}
}
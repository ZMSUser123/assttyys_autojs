/**
 * TODO 使用system/Schedule的Job作为ScheduleDefaultList的元素
 */

import { JobOptions } from '@/system/Schedule';

const ScheduleDefaultList: JobOptions[] = [
	{
		id: 1,
		name: '式神寄养',
		desc: '自动续式神寄养，建议把执行时间提前5分钟，启动前需要退出游戏',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 2,
		interval: '359',
		nextOffset: '0,5',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-式神寄养',
		}
	},
	{
		id: 2,
		name: '寮活动',
		desc: '自动参加寮活动，目前只支持道馆、狩猎',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 19 * * *',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-每日寮活动',
		}
	},
	{
		id: 3,
		name: '逢魔',
		desc: '自动参加逢魔活动',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 25 17 * * *',
		nextOffset: '10,50',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-每日逢魔',
		}
	},
	{
		id: 4,
		name: '喂猫喂狗',
		desc: '自动喂猫喂狗',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 5,16,23 * * *',
		nextOffset: '0,30',
		level: '5',
		config: {
			scheme: '定时任务-启动游戏-喂猫喂狗',
		}
	},
	{
		id: 5,
		name: '寮突',
		desc: '自动寮突',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 7 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-寮突',
		}
	},
	{
		id: 6,
		name: '地鬼',
		desc: '自动地鬼',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 10 * * *',
		nextOffset: '0,30',
		level: '6',
		config: {
			scheme: '定时任务-启动游戏-地鬼',
		}
	},
	{
		id: 7,
		name: '寮活动(阴门)',
		desc: '寮活动(阴门), 周五至周日',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 20 * * 5,6,0',
		nextOffset: '0,5',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(包含阴门)',
		}
	},
	{
		id: 8,
		name: '寮活动(狩猎)',
		desc: '寮活动(狩猎), 周一至周四',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 59 18 * * 1-4',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-庭院进入寮每日活动(包含阴门)',
		}
	},
	{
		id: 9,
		name: '寮活动(道馆)',
		desc: '寮活动(道馆), 周一至周四',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 19 * * 1-4',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(不包含阴门)',
		}
	},
	{
		id: 10,
		name: '寮活动(狭间)',
		desc: '寮活动(狭间), 周五至周日',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 59 18 * * 5,6,0',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '定时任务-启动游戏-庭院进入寮每日活动(狭间)',
		}
	},
	{
		id: 11,
		name: '寮活动(宴会)',
		desc: '寮活动(宴会), 周五或周日',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 19 * * 5,0',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(不包含阴门)',
		}
	},
	{
		id: 12,
		name: '寮活动(首领)',
		desc: '寮活动(首领), 周六',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 19 * * 6',
		nextOffset: '0,1',
		level: '10',
		config: {
			scheme: '庭院进入寮每日活动(不包含阴门)',
		}
	},
	{
		id: 13,
		name: '悬赏',
		desc: '自动悬赏',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 7,1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-悬赏',
		}
	},
	{
		id: 14,
		name: '重启模拟器',
		desc: '自动判断十分钟后是否有定时任务，否则重启模拟器，注意，目前jio并没有自启动功能，请配合模拟器脚本共同使用',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 0 4 * * *',
		nextOffset: '0,0',
		level: '0',
		config: {
			scheme: '重启模拟器',
		}
	},
	{
		id: 15,
		name: '每日签到与领取邮箱奖励',
		desc: '每日签到与领取邮箱奖励',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 10 1 * * *',
		nextOffset: '0,30',
		level: '1',
		config: {
			scheme: '定时任务-启动游戏-每日签到与收取邮件',
		}
	},
	{
		id: 16,
		name: '经验妖怪',
		desc: '经验妖怪',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 0 * * *',
		nextOffset: '0,30',
		level: '6',
		config: {
			scheme: '定时任务-启动游戏-经验妖怪',
		}
	},
	{
		id: 17,
		name: '金币妖怪',
		desc: '金币妖怪',
		checked: false,
		lastRunTime: null,
		nextDate: null,
		repeatMode: 3,
		interval: '0 5 0 * * *',
		nextOffset: '0,30',
		level: '6',
		config: {
			scheme: '定时任务-启动游戏-金币妖怪',
		}
	}
];

export default ScheduleDefaultList;
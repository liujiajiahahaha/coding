<?php
/** .-------------------------------------------------------------------
 * |  Software: [hdcms framework]
 * |      Site: www.hdcms.com
 * |-------------------------------------------------------------------
 * |    Author: 向军 <www.aoxiangjun.com>
 * | Copyright (c) 2012-2019, www.houdunren.com. All Rights Reserved.
 * '-------------------------------------------------------------------*/
namespace App\Http\Controllers\Member;

use App\Events\NotificationEvent;
use App\Http\Requests\UserMemberRequest;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

/**
 * 修改会员头像
 * Class IconController
 * @package App\Http\Controllers\Member
 */
class IconController extends Controller
{
    public function index()
    {
        $user = auth()->user();
        return view('member.icon.index', compact('user'));
    }

    public function store(UserMemberRequest $request)
    {
        auth()->user()->update($request->input());
        return back()->with('success', '资料修改成功');
    }
}

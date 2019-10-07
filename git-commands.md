# Git Commands

### git pull & git fetch

```
#git pull 等价于 git fetch + git merge
```

## 分支管理

1. git branch -v 查看分支信息
2. git branch -d 删除分支
    删除远程分支    git push origin --delete test

3. 拉取远程的分支   
git checkout --track origin/test    
git checkout -b test origin/test    拉取远程的分支到本地，修改本地分支的名称

4. 远程分支

git push -u origin test     推送分支到远程
git push origin --delete test   删除远程分支

5. 查看远程分支
- 查看所有的分支信息
    git branch -a
    git branch --all

- 查看远程仓库的信息

    git remote show origin

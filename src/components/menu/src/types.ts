export interface MenuItem {
  icon?: string,    // 图标
  name: string,     // 名字
  index: string     // 标识
  children?: MenuItem[]  // 子菜单
}
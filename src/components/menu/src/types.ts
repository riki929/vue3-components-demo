export interface MenuItem {
  icon?: string,    // 图标
  i?: any,       // 处理之后的图标
  name: string,     // 名字
  index: string     // 标识
  children?: MenuItem[]  // 子菜单
}
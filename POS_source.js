drinks={1:{'name':'可口可乐','price':3.5},
        2:{'name':'芬达','price':3.0},
        3:{'name':'橙汁','price':4},
        4:{'name':'美年达','price':3.0}}
burgers={1:{'name':'鸡腿堡','price':8.0},
         2:{'name':'巨无霸','price':15.0},
         3:{'name':'牛肉堡','price':12.0},
         4:{'name':'鳕鱼堡','price':11.0}}
snacks={1:{'name':'圣代','price':3.0},
        2:{'name':'薯条','price':3.5},
        3:{'name':'甜筒','price':2.0}}

cart=[] 

def add_to_cart(category,item_num,quantity):
        if category=="drinks" and item_num in drinks:
                item=drinks[item_num]
        elif category=="burgers" and item_num in burgers:
                item=burgers[item_num]
        elif category=="snacks" and item_num in snacks:
                item=snacks[item_num]
        else:
                print("错误的编号！请重新输入。")
                return
        item["quantity"]=quantity
        cart.append(item)
        print("已将商品加入购物车")
        print("\n")
def calculate_total():
        total=0
        for item in cart:
                total+=item["quantity"]*item["price"]
        return total

def print_invoices(total, payment):
    print("正在打印单据：")
    for item in cart:
        print(f"{item['name']}x{item['quantity']}:{item['price']}￥*{item['quantity']}")
    temp = payment - total
    if temp < 0:
        print(f"您支付的金额不足！请重试。")
    else:
        print(f"需支付金额为{total}￥")
        print(f"实付金额为{payment}￥")
        print(f"找零：{temp}￥")

while True:
        print("欢迎使用肯德基POS系统")
        print("\n")
        print("请选择要执行的操作")
        print("1.购买饮料")
        print("2.购买汉堡")
        print("3.购买小吃")
        print("4.结账并打印单据")
        print("按x键退出系统")
        print("\n")
        choice=input("您的选择是(输入编号):")
        if choice=="1":
                print("饮料:")
                for key , value in drinks.items():
                        print(f"{key}.{value['name']}:{value['price']}￥")
                print("\n")
                item_num=int(input("请输入您要购买的饮料编号:"))
                selected_item=drinks.get(item_num)
                print(f"已选择{selected_item['name']}")
                quantity=int(input(f"请输入您要购买的{selected_item['name']}数量:"))
                add_to_cart("drinks",item_num,quantity)
        elif choice=="2":
                print("汉堡:")
                for key , value in burgers.items():
                        print(f"{key}.{value['name']}:{value['price']}￥")
                item_num=int(input("请输入您要购买的汉堡编号:"))
                selected_item=burgers.get(item_num)
                print(f"已选择{selected_item['name']}")
                quantity=int(input(f"请输入您要购买的{selected_item['name']}数量:"))
                add_to_cart("burgers",item_num,quantity)
        elif choice=="3":
                print("小吃:")
                for key , value in snacks.items():
                        print(f"{key}.{value['name']}:{value['price']}￥")
                item_num=int(input("请输入您要购买的小吃编号:"))
                selected_item=snacks.get(item_num)
                print(f"已选择{selected_item['name']}")
                quantity=int(input(f"请输入您要购买的{selected_item['name']}数量:"))
                add_to_cart("snacks",item_num,quantity)
        elif choice == "4":
                if not cart:
                        print("您还未点餐，请先选择商品再进行结算。")
                else:
                        total = calculate_total()
                        print(f"应付金额为{total}￥")
                        print_invoices(total, float(input("输入您要支付的金额")))
        elif choice=="x":
                print("感谢您的使用，欢迎下次光临！")
                break
        else:
                print("您输入的操作无效，请重试")

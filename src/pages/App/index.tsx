import { Tabbar, SafeArea } from "@taroify/core";
import Taro from "@tarojs/taro"
import { HomeOutlined, ShopOutlined, PhoneOutlined, AwardOutlined } from "@taroify/icons";
import './index.scss';
import { View } from '@tarojs/components';
import { useState } from "react";
import React from "react";
import Mine from "../Mine";
import Contact from "../Contact";
const Home = React.lazy(() => import('../Home/index'));
const Shopping = React.lazy(() => import('../Shopping/index'));
const Culture = React.lazy(() => import('../Culture/index'));
const ManagerCenter = React.lazy(() => import('../Manager/index'));

export default function App () {
  const [currentTab, setTab] = useState<string>("home");
  const tabs = [
    { 
      value: "home",
      text: "首页",
      icon: <HomeOutlined />,
      navbar: { 
        title: "首页",
        backgroundColor: "#FFFFFF",
        frontColor: "#000000"
      }
    },
    { 
      value: "shopping",
      text: "产品中心",
      icon: <ShopOutlined />,
      navbar: { 
        title: "产品中心", 
        backgroundColor: "#FFFFFF",
        frontColor: "#000000" 
      }
    },
    { 
      value: "culture",
      text: "甲骨文酒文化",
      icon: <AwardOutlined />,
      navbar: { 
        title: "甲骨文酒文化",
        backgroundColor: "#FFFFFF",
        frontColor: "#000000"
      }
    },
    { 
      value: "contact",
      text: "联系我们",
      icon: <PhoneOutlined />,
      navbar: { 
        title: "联系我们",
        backgroundColor: "#FFFFFF",
        frontColor: "#000000"
      }
    },
    /* { 
      value: "manager",
      text: "管理",
      icon: <AppsOutlined />,
      navbar: { 
        title: "管理中心",
        backgroundColor: "#FFFFFF",
        frontColor: "#000000"
      }
    } */
  ];
  const onTabChange = (value: string) => {
    const current = tabs.find((item) => item.value === value);
    if (!current) {
      return null;
    }
    const { navbar }: any = current;
    const { title, backgroundColor, frontColor } = navbar;
    Taro.hideLoading();
    Taro.setNavigationBarTitle({ title });
    Taro.setNavigationBarColor({ backgroundColor, frontColor });
    setTab(value);
  };
  return (
    <View className='root'>
      <View className='app'>
        { currentTab === 'home' ? <Home /> : null}
        { currentTab === 'shopping' ? <Shopping /> : null}
        { currentTab === 'culture' ? <Culture /> : null}
        {/* { currentTab === 'manager' ? <ManagerCenter /> : null} */}
        { currentTab === 'mine' ? <Mine /> : null}
        { currentTab === 'contact' ? <Contact /> : null}
      </View>
      <View>
        <Tabbar defaultValue={currentTab} onChange={onTabChange}>
          {
            tabs.map(({ text, icon, value }) => <Tabbar.TabItem icon={icon} value={value}>{text}</Tabbar.TabItem>)
          }
        </Tabbar>
      </View>
      <SafeArea position="bottom" />

    </View>
  )
}

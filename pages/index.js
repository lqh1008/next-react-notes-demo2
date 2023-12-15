// import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Aaa() {
    const router = useRouter()
    useEffect(()=>{
      setTimeout(() => {
        router.push('/post/1')
      }, 10000);
    })
    return <>5s 后跳转</>
}
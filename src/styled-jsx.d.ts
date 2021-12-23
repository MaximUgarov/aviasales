import "react";

declare module "react" {
    interface StyleHTMLAttributes<T> extends HTMLAttributes<T> {
        jsx?: string;
        global?: boolean;
    }
}
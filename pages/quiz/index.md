---
title: Quiz
description: Sample quiz
---

# Quiz

{% quiz shuffle=true %}  

What will be the output of the following code?

```java
int n = 10;
while (n-- >= 1) {
  System.out.print(n + " ");
}
```

{% option %}    
`10 9 8 7 6 5 3 2 1`
{% /option %}  

{% option %}
`9 8 7 6 5 4 3 2 1`
{% /option %}

{% option %}
`10 9 8 7 6 5 3 2 1`
{% /option %}

{% option correct=true %}  
`9 8 7 6 5 4 3 2 1 0`
{% /option %}

{% option %}
Will not compile because of the syntax error in the condition!
{% /option %}

{% /quiz %}
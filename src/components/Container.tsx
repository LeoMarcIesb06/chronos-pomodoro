import styles from './Container.module.css';

type ConteinerProps = {
  children: React.ReactNode;
};

export function Container({ children }: ConteinerProps) {
  return (
    <div className={styles.container}>
      <div className={styles.container}>{children}</div>
    </div>
  );
}
